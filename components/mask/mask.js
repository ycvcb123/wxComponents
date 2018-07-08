var maskAnimation = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease',
    delay: 0
});
var adAnimation = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease',
    delay: 0
});

Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
        }
    },
    data: {
        showMask: false,
        maskAnimationData: {},
        adContentAnimationData: {}
    },
    methods: {
        // initAnimation: function () {
        //     //初始化动画
        //     this.maskAnimation = wx.createAnimation({
        //         duration: 500,
        //         timingFunction: 'ease',
        //         delay: 0
        //     });
        //     this.adAnimation = wx.createAnimation({
        //         duration: 500,
        //         timingFunction: 'ease',
        //         delay: 0
        //     });
        // },
        showModal: function () {
            var that = this;
            setTimeout(function () {
                adAnimation.translateY(0).step();
                maskAnimation.opacity(.5).step();
                that.setData({
                    showMask: true
                }, () => {
                    that.setData({
                        adAnimationData: adAnimation.export(),
                        maskAnimationData: maskAnimation.export()
                    })
                })
            }.bind(that), 500)
        },
        hideModal: function () {
            var that = this;
            var windowHeight;
            wx.getSystemInfo({
                success: function(res) {
                    windowHeight = res.windowHeight;
                }
            })
            setTimeout(function () {
                adAnimation.translateY(windowHeight).step();
                maskAnimation.opacity(0).step();
                that.setData({
                    adAnimationData: adAnimation.export(),
                    maskAnimationData: maskAnimation.export()
                })

                setTimeout(()=>{
                    that.setData({
                        showMask: false
                    })
                },500)
                
            }.bind(that), 500)

        }
    }
})