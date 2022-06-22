class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callBack, id) {  
        if (id === undefined) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some(el => 
             el.id === id
        )) {
            return;
        }
        this.alarmCollection.push({
            id,
            callBack,
            time
        })
    }
    removeClock(id) {
        let startLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(el => el.id != id);
        return !(startLength === this.alarmCollection.length);
    }
    getCurrentFormattedTime() {
        let date = new Date();
        let currentHours = ("0" + date.getHours()).slice(-2);
        let currentMinutes = ("0" + date.getMinutes()).slice(-2);
        let time = currentHours + ":" + currentMinutes;
        return time;
    }
    start() {
        let forTime = this;
        function checkClock(alarm) {
            if (alarm.time === forTime.getCurrentFormattedTime()) {
                alarm.callBack();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(el => checkClock(el));
            }, 1000);
        }
    }
    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(el => console.log(`Будильник ${el.id} прозвонит в ${el.time}.`));
    }
    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}