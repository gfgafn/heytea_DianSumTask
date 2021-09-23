import React, { Component } from 'react'
import './index.css';
export default class Slideshow extends Component {
    componentDidMount() {
        // 获取元素
        var slider = document.querySelector('.slideShow')
        var ul = slider.children[0];
        // 获取slider的宽度
        var w = slider.offsetWidth;
        // 获取ol
        var ol = slider.children[1];
        // 利用定时器自动轮播图片
        var index = 0;
        var timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            // 过渡效果
            ul.style.transition = 'all.3s';// 过渡动画
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
        // 监听过渡完成的事件 transitionend
        ul.addEventListener('transitionend', function () {
            // 无缝过渡
            if (index >= 3) {
                index = 0;
                ul.style.transition = 'none';// 去掉过渡效果,快速跳到目标位置
                var translatex = -index * w;
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
            else if (index < 0) {
                index = 2;
                ul.style.transition = 'none';// 去掉过渡效果,快速跳到目标位置
                translatex = -index * w;
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
            //让小圆点跟随变化
            //把ol里的li带有current类名的选出来去掉类名
            ol.querySelector('.current').classList.remove('current');
            //让当前索引号的li加上current
            ol.children[index].classList.add('current');
        });
        
        // 手指滑动轮播图
        var startX = 0;
        var moveX = 0;
        // 触摸元素touchstart：获取手指初始坐标
        ul.addEventListener('touchstart',function(e) {
            startX = e.targetTouches[0].pageX;
            clearInterval(timer);// 手指触摸时停止定时器
        })
        // 移动手指touchmove：计算手指滑动的距离，并且移动盒子
        ul.addEventListener('touchmove', function(e) {
            // 计算移动距离
            moveX = e.targetTouches[0].pageX - startX;
            var translatex = -index * w + moveX;
            ul.style.transition = 'none';// 手指拖动时去掉过渡效果,快速跳到目标位置
            ul.style.transform = 'translateX(' + translatex + 'px)';
        });
        // 手指离开 根据移动距离判断是回弹还是播放上一张或下一张
        ul.addEventListener('touchend', function(e) {
            if (Math.abs(moveX) > 100) {
                // 如果是右滑就是 播放上一张 moveX 是负值
                if (moveX > 0) {
                    index--;
                }else {
                    // 如果是左滑就是 播放上一张 moveX 是负值
                    index++;
                } 
                var translatex = -index * w;
                ul.style.transition = 'all.3s';// 过渡动画
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }else {
                translatex = -index * w;
                ul.style.transition = 'all.3s';// 过渡动画
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        });    
    }
    render() {
        return (
            <div className={'slideShow'}>
                {/* 轮播图  */}
                {/* <div className={'slideShow'}> */}
                    <ul>
                        <li><img src="../img/home/home_slide_chongQin.png" alt=""/></li>
                        <li><img src="../img/home/home_slide_wuHan.png" alt=""/></li>
                        <li><img src="../img/home/home_slide_tianJin.png" alt=""/></li>
                        <li><img src="../img/home/home_slide_chongQin.png" alt=""/></li>
                        <li><img src="../img/home/home_slide_wuHan.png" alt=""/></li>
                    </ul>
                    <ol>
                        <li className={'current'}> </li>
                        <li className={''}> </li>
                        <li className={''}> </li>
                    </ol>
                {/* </div>                 */}
            </div>
        )           
    }            
}
