!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t){},function(e,t,o){"use strict";function n(){AOS.init()}function r(){$(".gnb-open").on("click",function(){$("html").css("overflow-y","hidden"),$("#header").addClass("is-gnb")}),$(".gnb-close").on("click",function(){$("html").removeAttr("style"),$("#header").removeClass("is-gnb")}),$(window).on("scroll",function(){$(this).scrollTop()>0?$("#header").addClass("is-fixed"):$("#header").removeClass("is-fixed")})}$(function(){n(),r()}),document.addEventListener("DOMContentLoaded",function(){function e(){var e=Math.round(this.scrollTop);e>s.scrollHeight-s.clientHeight-c.clientHeight?l.classList.remove("hide"):i>e?l.classList.remove("hide"):l.classList.add("hide"),i=e}console.log("loadding page");var t=document.querySelector("#statusbar"),o=document.querySelector("#header"),n=document.querySelector("#homeTop"),r=document.querySelector("#homeSearchbar"),s=document.querySelector("#container section"),l=document.querySelector("#bottom"),c=document.querySelector("#actionbar");s.addEventListener("scroll",function(){var e=Math.round(s.scrollTop);e>0?(null!==t&&t.classList.add("scroll"),null!==o&&o.classList.add("scroll"),null!==r&&(e>n.scrollHeight-(t.clientHeight+o.clientHeight)?r.classList.add("fixed"):r.classList.remove("fixed"))):(null!==t&&t.classList.remove("scroll"),null!==o&&o.classList.remove("scroll"))});var i=0;s.addEventListener("scroll",e);!function(){var e=document.querySelector("#topBtn"),t=function(){var t=document.querySelector("#wrap").clientHeight,o=document.querySelector("#footer").clientHeight,n=Math.round(t-(window.innerHeight+o));window.scrollY>0?e.classList.add("is-show"):e.classList.remove("is-show"),window.scrollY>n?e.classList.add("is-absolute"):e.classList.remove("is-absolute")};window.addEventListener("scroll",t);var o=function e(){0!=window.scrollY&&setTimeout(function(){window.scrollTo(0,window.scrollY-50),e()},10)};e.addEventListener("click",o)}()})}]);