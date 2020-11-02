/*
绑定在预制体Hero下
*/

cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel1: {
            default: null,
            type: cc.Label
        },
        nameLabel2: {
            default: null,
            type: cc.Label
        },
        blood: {
            default: null,
            type: cc.Sprite
        },
        spriteFrame:{
            default: null,
            type: cc.Sprite
        },
        button: {
            default: null,
            type: cc.Button
        },
    },

    //更新背包列表项
    upDateList(spriteFrame, info) {
        this.nameLabel1.string = info.name;  
        this.nameLabel2.string = info.name2;        
        this.blood._fillRange = info.blood;      
        this.spriteFrame.spriteFrame = spriteFrame;
    },

    start () {

    },
});
