angular.module("directives.allStudent",[])
.directive("studentItem",function(){
	return {
		restrict: "E",
		replace: true,
		templateUrl:"template/stuitem.html"
	}
})
.directive("allStudent",function(

){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var X = XLSX;
			var XW = {
				/* worker message */
				msg: 'xlsx',
				/* worker scripts */
				rABS: './lib/xlsxworker2.js',
				norABS: './lib/xlsxworker1.js',
				noxfer: './lib/xlsxworker.js'
			};
			var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
			if(!rABS) {
				$scope.student.userabs.disabled = true;
				$scope.student.userabs.checked = false;
			}
			var use_worker = typeof Worker !== 'undefined';
			if(!use_worker) {
				$scope.student.useworker.disabled = true;
				$scope.student.useworker.checked = false;
			}
			var transferable = use_worker;
			if(!transferable) {
				$scope.student.xferable.disabled = true;
				$scope.student.xferable.checked = false;
			}
			var wtf_mode = false;
			function fixdata(data) {
				var o = "", l = 0, w = 10240;
				for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
				o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
				return o;
			}
			function ab2str(data) {
				var o = "", l = 0, w = 10240;
				for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint16Array(data.slice(l*w,l*w+w)));
				o+=String.fromCharCode.apply(null, new Uint16Array(data.slice(l*w)));//打印这块的o的时候也出现了文字
				return o;
			}
			function s2ab(s) {
				var b = new ArrayBuffer(s.length*2), v = new Uint16Array(b);
				//console.log(b); 此时b为空
				for (var i=0; i != s.length; ++i) v[i] = s.charCodeAt(i);
				return [v, b];
			}
			function xw_noxfer(data, cb) {
				var worker = new Worker(XW.noxfer);
				worker.onmessage = function(e) {
					switch(e.data.t) {
						case 'ready': break;
						case 'e': console.error(e.data.d); break;
						case XW.msg: cb(JSON.parse(e.data.d)); break;
					}
				};
				var arr = rABS ? data : btoa(fixdata(data));
				worker.postMessage({d:arr,b:rABS});
			}
			function xw_xfer(data, cb) {
				var worker = new Worker(rABS ? XW.rABS : XW.norABS);
				worker.onmessage = function(e) {
					switch(e.data.t) {
						case 'ready': break;
						case 'e': console.error(e.data.d); break;
						default: xx=ab2str(e.data).replace(/\n/g,"\\n").replace(/\r/g,"\\r"); console.log("done"); cb(JSON.parse(xx)); break;//从这一块打印出来的xx出现的文字
					}
				};
				if(rABS) {
					var val = s2ab(data);
					worker.postMessage(val[1], [val[1]]);
				} else {
					worker.postMessage(data, [data]);
				}                                         //我运行到这一步了
				//console.log(data);  已经接近了
			}

			function xw(data, cb) {
				transferable = $scope.student.xferable.checked;
				if(transferable) xw_xfer(data, cb);
				else xw_noxfer(data, cb);
			}

			function get_radio_value( radioName ) {
				var radios = document.getElementsByName( radioName );
				for( var i = 0; i < radios.length; i++ ) {
					if( radios[i].checked || radios.length === 1 ) {
						//console.log(radios);
						return radios[i].value;
					}
				}
			}
			//这个是必须的
			function to_json(workbook) {
				var result = {};
				workbook.SheetNames.forEach(function(sheetName) {
					var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
					if(roa.length > 0){
						result[sheetName] = roa;
					}
				});
				return result;
			}
			function process_wb(wb) {
			    
				$scope.studentList = to_json(wb).Sheet1;
				console.log("$scope.studentList %o",$scope.studentList);
				$scope.$digest();
			}

			var drop = document.getElementById('drop');
			function handleDrop(e) {
				e.stopPropagation();
				e.preventDefault();
				rABS = $scope.student.userabs.checked;
				use_worker = $scope.student.useworker.checked;
				var files = e.dataTransfer.files;
				var f = files[0];
				{
					var reader = new FileReader();
					var name = f.name;
					reader.onload = function(e) {
						if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
						var data = e.target.result;
						var abcd=JSON.stringify(data);
						// console.log(abcd);
						if(use_worker) {
							xw(data, process_wb);
						} else {
							var wb;
							if(rABS) {
								wb = X.read(data, {type: 'binary'});
							} else {
							var arr = fixdata(data);
								wb = X.read(btoa(arr), {type: 'base64'});
							}
							process_wb(wb);
						}
					};
					if(rABS) reader.readAsBinaryString(f);
					else reader.readAsArrayBuffer(f);
				}
			}

			function handleDragover(e) {
				e.stopPropagation();
				e.preventDefault();
				e.dataTransfer.dropEffect = 'copy';
			}

			if(drop.addEventListener) {
				drop.addEventListener('dragenter', handleDragover, false);
				drop.addEventListener('dragover', handleDragover, false);
				drop.addEventListener('drop', handleDrop, false);
			}
		}
	}
})
