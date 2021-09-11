"use strict";
window.OfflineClientInfo = new class {
    constructor() {
        if (this._broadcastChannel = "undefined" == typeof BroadcastChannel ? null : new BroadcastChannel("offline"), this._queuedMessages = [], this._onMessageCallback = null, this._broadcastChannel) {
            var s = this;
            this._broadcastChannel.onmessage = function(e) {
                s._OnBroadcastChannelMessage(e)
            }
        }
    }
    _OnBroadcastChannelMessage(s) {
        this._onMessageCallback ? this._onMessageCallback(s) : this._queuedMessages.push(s)
    }
    SetMessageCallback(s) {
        this._onMessageCallback = s;
        for (let s of this._queuedMessages) this._onMessageCallback(s);
        this._queuedMessages.length = 0
    }
};