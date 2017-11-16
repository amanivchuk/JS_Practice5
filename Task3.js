var tv = {
    currentChanel : 1,
    nextChannel : function () {
        tv.currentChanel++;
    },
    previousChannel : function () {
        tv.currentChanel--;
    },
    setChannel : function (number) {
        tv.currentChanel = number;
    }
};

console.log(tv.currentChanel);
tv.nextChannel();
console.log(tv.currentChanel);
tv.nextChannel();
console.log(tv.currentChanel);
tv.setChannel(25);
console.log(tv.currentChanel);

