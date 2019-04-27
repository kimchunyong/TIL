# Custom video play

```javascript
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay () {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton () {
  const icon = this.paused ? '►' : '||';
  toggle.textContent = icon;
}

function skip () {
  console.log(typeof this.dataset.skip);
  console.log(video.currentTime);
  video.currentTime += parseFloat(this.dataset.skip);
  /* parseFloat(),
  parseInt()는 차이점은 의도치않게 2~36진수까지 정의하여 '09'일때  0으로
  시작하는 숫자는 8진수로 인식
  근데 0x는 16진수 고로 8진수로 사용 불가하여 0으로 나옴
  */
}

function handleRangeUpdate () {
  video[this.name] = this.value;
}

function handleProgress () {
  const percent = video.currentTime / video.duration * 100;
  console.log(percent);
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
  const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);

```