(function (window, document, undefined) {
function getElement(cssClass) {
    return document.querySelector(cssClass);
}

// variables for indiglo
var buttonLight = getElement('.watch_buttons_light');
var buttonMode = getElement('.watch_buttons_mode');

	// variables for stopwatch toggle
	var buttonStartStop = getElement('.watch_buttons_startStop');

	// variables for mode toggle
	var watchBody = getElement('.watch_body');
	var watchClock = getElement('.watch_body_time');
	var watchStopwatch = getElement('.watch_body_stopwatch');

	// variables for hours toggle
	var watchMeridien = getElement('.watch_body_clockType_meridien');
	var watchMilitary = getElement('.watch_body_clockType_military');

	// variables for setting date/time
	var watchHour = getElement('.watch_body_time_h');
	var watchMinute = getElement('.watch_body_time_m');
	var watchSecond = getElement('.watch__body-time-s');
	var watchDay = getElement('.watch_body_date_day');
	var watchDayNumber = getElement('.watch_body_date_number');

	// variables for stopwatch
	var stopwatchMinute = getElement('.watch_body_stopwatch_m');
	var stopwatchSecond = getElement('.watch_body_stopwatch_s');
	var stopwatchMS = getElement('.watch_body_stopwatch_ms');

    var stopWatchModeActive = false;
	var stopWatchRunning = false;
	var militaryClock = false;

    function indigloHandler(on) {
        if (on) {
			watchBody.classList.add('js_indiglo');
		} else {
			watchBody.classList.remove('js_indiglo');
		}
    }

    function toggleWatchMode(mode) {
		if (mode === 'clock') {
			watchClock.classList.add('js_show');
			watchClock.classList.remove('js_hide');
			watchStopwatch.classList.add('js_hide');
			watchStopwatch.classList.remove('js_show');
			stopWatchModeActive = false;
		} else if (mode === 'stopwatch') {
			watchClock.classList.add('js_hide');
			watchClock.classList.remove('js_show');
			watchStopwatch.classList.add('js_show');
			watchStopwatch.classList.remove('js_hide');
			stopWatchModeActive = true;
		}
	}

    function toggleTimeMode(mode) {
		if (mode === 'meridiem') {
			watchMeridien.classList.remove('js_invisible');
			watchMilitary.classList.add('js_invisible');
			militaryClock = false;
		} else {
			watchMeridien.classList.add('js_invisible');
			watchMilitary.classList.remove('js_invisible');
			militaryClock = true;
		}
		setTime();
	}

    function toggleStopWatch(on) {
		if (on) {
			start();
			stopWatchRunning = true;
		} else {
			stop();
			stopWatchRunning = false;
		}
	}

    function setTime() {
		// variables for getting date/time
		var date = new Date;
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hour = date.getHours();
		var day = date.getDate();
		var dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
		var days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
		var meridiem;

		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;

		if (!militaryClock) {
			meridiem = '';
			
			if (hour >= 12) {
				hour = hour - 12;
				meridiem = 'PM';
				watchMeridien.textContent = meridiem;
			}

			if (hour === 0) hour = 12;
		}

		var dayOfWeek = days[dayOfWeek];

		watchHour.textContent = hour;
		watchMinute.textContent = minutes;
		watchSecond.textContent = seconds;
		watchDayNumber.textContent = day;
		watchDay.textContent = dayOfWeek;
	}

    buttonLight.onmousedown = function() {
		indigloHandler(true);
		if (stopWatchModeActive && !stopWatchRunning) {
			reset();
		}
	};
	document.body.onmouseup = function() { indigloHandler(false); };

	buttonMode.onclick = function() {
		if (!stopWatchModeActive) {
			toggleWatchMode('stopwatch');
		} else {
			toggleWatchMode('clock');
		}
	};

	buttonStartStop.onclick = function() {
		if (!stopWatchModeActive) {
			if (militaryClock) {
				toggleTimeMode('meridiem');
			} else {
				toggleTimeMode('military');
			}
		} else if (!stopWatchRunning) {
			toggleStopWatch(true);
		} else if (stopWatchRunning) {
			toggleStopWatch(false);
		}
	};

	// clock
	setTime();
	setInterval(setTime, 1000);

})(window, document);



var stopWatch = function() {
    var startAt = 0;
    var lapTime = 0;

    var now = function () {
        return (new Date ()).getTime();
    };

    this.stopWatchMinute = document.querySelector('.watch_body_stopwatch_m');
	this.stopWatchSecond = document.querySelector('.watch_body_stopwatch_s');
	this.stopWatchMS = document.querySelector('.watch_body_stopwatch_ms');
	this.stopWatch = document.querySelector('.watch_body_stopwatch');

    this.start = function() {
		startAt	= startAt ? startAt : now();
	};

    this.stop = function() {
		// If running, update elapsed time otherwise keep it
		lapTime	= startAt ? lapTime + now() - startAt : lapTime;
		startAt	= 0; // Paused
	};


    this.reset = function() {
		lapTime = startAt = 0;
	};

	// Duration
	this.time = function() {
		return lapTime + (startAt ? now() - startAt : 0);
	};
};

var x = new stopWatch();
var clocktimer;

function pad(num, size) {
	var s = '0000' + num;
	return s.substr(s.length - size);
}

function updateTime() {
	var time = x.time();
	var m = Math.floor( time / (60 * 1000) );
	var time = time % (60 * 1000);
	var s = Math.floor( time / 1000 );
	var ms = time % 1000;

	x.stopWatchMinute.textContent = pad(m, 2);
	x.stopWatchSecond.textContent = pad(s, 2);
	x.stopWatchMS.textContent = pad(ms, 2);
}

function start() {
	clocktimer = setInterval(updateTime, 1);
	x.stopWatch.classList.add('js_running');
	x.start();
}

function stop() {
	x.stop();
	clearInterval(clocktimer);
	x.stopWatch.classList.remove('js_running');
}

function reset() {
	stop();
	x.reset();
	updateTime();
}

