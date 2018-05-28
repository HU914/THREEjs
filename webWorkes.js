function ajax(){
    var xhr = new XMLHttpRequest();
    xhr.open("post",url);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
    xhr.onreadystatechange = function(){
        var state = xhr.readyState;
        switch(state){
            case 0 :
                /* 请求对象被创建的状态 */
                break;
            case 1 :
                /* 调用了open方法，这里你如果是post类型，则数据已经开始发送 */
                break;
            case 2 :
                /* send方法已调用，这里是get类型，数据开始发送 */
                break;
            case 3 :
                /* 所有响应头已经接收，响应体开始接收但没有完成，数据开始接收，但并没有完成 */
                break;
            case 4 :
                /* 整个响应已经完成 */
                    console.log(responseText);
                break;
            default:
                /* 以上状态码都不正确时，表示状态为改变 */
        }
    }
    xhr.send(data)
}

/*  解：onreadystatechange事件句柄是在状态改变之后才会触发，放在send()的前面和后面没什么区别，
    但是很多封装的ajax之所以把 onreadystatechange事件句柄放在send()之前，是在考虑到 请求事件完成的太快
    快到send()数据发出后onreadystatechange事件句柄还没有定义，状态过程就结束了，那么自然就监听不到每个状态
    返回的值和不同的状态，连返回数据完成状态都不能监听到，怎么去获取反悔的数据呢，所以 很多人 就把onreadystatechange事件句柄
    放在了前面，用以避免这种情况的发生
*/