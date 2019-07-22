window.onload = function() {

  // -- Show/Hide navigation --
  var navbar = document.getElementById('navbar');
  var menu = document.getElementsByClassName('menu')[0];
  var menuTest = document.getElementById('menu-icon');
  var menuTxt = document.getElementsByClassName('menu-text')[0];


  menu.addEventListener('click', function() {
    navbar.classList.toggle('navbar-active');
    menuTest.classList.toggle('close-icon');
    if(menuTxt.innerHTML == 'MENU') {
      menuTxt.innerHTML = 'CLOSE';
      menuTxt.style.color = '#fff';
    } else {
      menuTxt.innerHTML = 'MENU';
      menuTxt.style.color = '#6f6f6f';
    }
  });

  // -- Fixed header on scroll --

  var scroll = window.pageYOffset;
  var header = document.getElementById('header');

  var addClass = function() {
    header.classList.add('header-fixed');
  }
  var removeClass = function() {
    header.classList.remove('header-fixed');
  }

  window.addEventListener('scroll', function() {
    scroll = window.pageYOffset;

    if(scroll > 25) {
      addClass();
    } else {
      removeClass();
    }
  });

  // -- Active side button on scroll --

  var sideBtns = document.getElementsByClassName('circle');
  var section = document.getElementsByTagName('section');
  var footer = document.getElementsByTagName('footer')[0];

  var framework = document.getElementsByClassName('remove-class')[0];

  window.addEventListener("scroll", function() {
    var fromTop = window.pageYOffset;

    for(var i = 0; i < section.length; i++) {
      var top = section[i].offsetTop;
      var bottom = top + section[i].offsetHeight;

      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;

      if(fromTop >= top && fromTop <= bottom) {
        for(var j = 0; j < sideBtns.length; j++) {
          if(section[i].id == sideBtns[j].dataset.id) {
            sideBtns[j].classList.add('side-btn-active');
          } else if(offset == height && footer.id == sideBtns[j].dataset.id) {
            sideBtns[j].classList.add('side-btn-active');
            framework.classList.remove('side-btn-active');
          } else {
            sideBtns[j].classList.remove('side-btn-active');
          }
        }
      }
    }
  });

  // -- Equal Heights --

  var mq = window.matchMedia("(min-width: 768px)");

  if(mq.matches) {

    (function () {
      var rowHead = document.getElementsByClassName('framework-row-head ');
      var row1 = document.getElementsByClassName('framework-row-1');
      var row2 = document.getElementsByClassName('framework-row-2');
      var row3 = document.getElementsByClassName('framework-row-3');

      var tallestHead = 0;
      var tallest1 = 0;
      var tallest2 = 0;
      var tallest3 = 0;

      for(i = 0; i < rowHead.length; i++) {
        var ele = rowHead[i];
        var eleHeight = ele.offsetHeight;
        tallestHead = (eleHeight > tallestHead ? eleHeight : tallestHead);
      }

      for(i = 0; i < rowHead.length; i++) {
        rowHead[i].style.height = tallestHead + "px";
      }

      for(i = 0; i < row1.length; i++) {
        var ele = row1[i];
        var eleHeight = ele.offsetHeight;
        tallest1 = (eleHeight > tallest1 ? eleHeight : tallest1);
        row1[i].style.height = tallest1 + "px";
      }

      for(i = 0; i < row2.length; i++) {
        var ele = row2[i];
        var eleHeight = ele.offsetHeight;
        tallest2 = (eleHeight > tallest2 ? eleHeight : tallest2);
        row2[i].style.height = tallest2 + "px";
      }

      for(i = 0; i < row3.length; i++) {
        var ele = row3[i];
        var eleHeight = ele.offsetHeight;
        tallest3 = (eleHeight > tallest3 ? eleHeight : tallest3);
        row3[i].style.height = tallest3 + "px";
      }
    })()
  }
}

 // -- Scroll --

function jumpTo() {

  window.onclick = function(e) {

    var hero = document.getElementById('hero');
    var results = document.getElementById('results');
    var chairman = document.getElementById('chairman');
    var strategy = document.getElementById('strategy');
    var framework = document.getElementById('framework');
    var footer = document.getElementById('footer');

    if(hero.id == e.target.dataset.id) {
      hero.scrollIntoView({behavior: 'smooth', block: 'end'});
    } else if(results.id == e.target.dataset.id) {
      results.scrollIntoView({behavior: 'smooth', block: 'end'});
    } else if(chairman.id == e.target.dataset.id) {
      chairman.scrollIntoView({behavior: 'smooth', block: 'end'});
    } else if(strategy.id == e.target.dataset.id) {
      strategy.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else if(framework.id == e.target.dataset.id) {
      framework.scrollIntoView({behavior: 'smooth', block: 'start'});
    }else if(footer.id == e.target.dataset.id) {
      footer.scrollIntoView({behavior: 'smooth', block: 'end'});
    }
  }
}