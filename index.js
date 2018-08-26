function TimeStep(){
    this.el = document.getElementById('timeBox');
    this.timer = null;
    this.start = function(){
        var second = 0,
            minute = 0,
            hour = 0;
        this.el.innerHTML = handleNum(hour) + ':' + handleNum(minute) + ':' + handleNum(second);
        var that = this;
        this.timer = setInterval(function(){
            second++;
            if(second > 59){
                second = 0;
                minute++;
            }
            if(minute > 59){
                minute = 0;
                hour++;
            }
            that.el.innerHTML = handleNum(hour) + ':' + handleNum(minute) + ':' + handleNum(second);
        },1000);
        function handleNum(n){
            if(n < 10){
                n = '0' + n;
            }
            return n;
        }
    };
    this.end = function(){
        clearInterval(this.timer);
    }
}