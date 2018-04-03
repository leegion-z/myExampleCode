function Shake(obj, Rate, speed, times) {
	this.obj = obj
	this.L = this.obj.offsetLeft;
	this.T = this.obj.offsetTop;
	this.Rate = Rate;
	this.speed = speed
	this.times = times;
	this.Timer = null;//定时器
	this.num = 0;
	var that = this;
	this.start()
}

//prototype 属性使您有能力向对象添加属性和方法
Shake.prototype = {
	start: function() {
		this.num++;
		var that = this

		if (this.num == this.times*2) {
			this.stoped()
		} else {

			if (parseInt(this.obj.style.left) == Math.abs(this.L - 2)) {
				var that = this
				this.obj.style.top =Math.abs( this.T + 2 )+ "px";
				setTimeout(function() {
					that.obj.style.left = Math.abs(that.L + 2) + "px"
				}, this.Rate)

			} else {
				var that = this
				this.obj.style.top = Math.abs(this.T - 2) + "px";
				setTimeout(function() {
					that.obj.style.left = Math.abs(that.L - 2) + "px"
				}, this.Rate)
			}
			this.Timer = setTimeout(function() {
				that.start()
			}, this.speed);
		}
	},
	stoped: function() {
		this.obj.style.left=this.L +'px'
		this.obj.style.top=this.T +'px'
		clearTimeout(this.Timer);
	}
}