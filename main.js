const bannerList = document.querySelector('#bannerListId');
const bannerItem = document.querySelectorAll('#bannerItemId');

const prevBtn = document.querySelector('#prevBtnId');
const nextBtn = document.querySelector('#nextBtnId');

let counter = 0;

nextBtn.addEventListener('click', () => {
  counter = counter + 100;

  bannerList.style.marginLeft = `-${counter}%`;
  bannerList.style.transition = 'all 0.3s';

  if (counter > 200) {
    counter = 0;

    bannerList.style.marginLeft = 0;
    bannerList.style.transition = 'all 0.1s';
  }

  //   console.log('nex counter: ', counter);
});

prevBtn.addEventListener('click', () => {
  counter = counter - 100;

  bannerList.style.marginLeft = `-${counter}%`;
  bannerList.style.transition = 'all 0.3s';

  if (counter < 0) {
    counter = 200;
    bannerList.style.marginLeft = `-${counter}%`;
    bannerList.style.transition = 'all 0.1s';
  }

  //   console.log('prev counter: ', counter);
});

setInterval(() => {
  counter = counter + 100;

  bannerList.style.marginLeft = `-${counter}%`;

  if (counter > 200) {
    counter = 0;
    bannerList.style.marginLeft = `-${counter}%`;
  }
}, 3000);
