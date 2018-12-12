// ==UserScript==
// @name         Gopok Upvote Bot
// @version      1.0.0
// @description  upvote all the posts
// @author       Bjornskjald
// @match        https://gopok.io
// @grant        none
// ==/UserScript==

document.querySelectorAll('.v-btn.v-btn--floating.v-btn--outline.theme--light.blue--text').forEach(button => button.click())
