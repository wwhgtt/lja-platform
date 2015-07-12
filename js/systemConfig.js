var environment = 'test';//开发状态是dev,测试状态是test,发布状态是release
if(environment === 'dev'){
	window.BASE_URL = '/dev';
}else if(environment === 'test'){
	window.BASE_URL = '/test'
}else if(environment === 'release'){
	window.BASE_URL = "";
}else{
	window.BASE_URL = "";
}