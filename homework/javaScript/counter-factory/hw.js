// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], 
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    let newCounterComponent = document.createElement('div');
    newCounterComponent.innerHTML =
    `<h3>Count: <span>0</span></h3> <button class='increment'> +1 </button> <button class='delete'> Delete </button>`;
    newCounterComponent.className += ' counter';
    newCounterComponent.dataset.countId = newCountId;
    newCounterComponent.getElementsByClassName('increment')[0].onclick= AppController.onClickIncrement;
    newCounterComponent.getElementsByClassName('delete')[0].onclick = AppController.onClickDelete;
    document.getElementById('counter-list').appendChild(newCounterComponent);
  },
  refreshCounterComponent: function(countId){
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = val;
    console.log(`refresh counter component #${countId}`);
  },
  removeCounterComponent: function(countId){             
    console.log(`remove counter component #${countId}`);
    let counterComponent = document.querySelector(`[data-count-id="${countId}"]`)
    console.log(counterComponent, counterComponent.parent);
    counterComponent.parentNode.removeChild(counterComponent);
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    CounterCollection.createCounter();
    Presenter.insertCounterComponent(CounterCollection.lastCountId);
    console.log(`click new counter (#${CounterCollection.lastCountId})`);
  },
  onClickIncrement: function(event){
    let countId = Number(event.target.parentNode.dataset.countId);
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);
    console.log(`click increment #${countId}`);
  },
  onClickDelete: function(event){                           
    let countId = Number(event.target.parentNode.dataset.countId);
    CounterCollection.incrementCounter(countId);
    Presenter.removeCounterComponent(countId);
    console.log(`click delete #${countId}`);
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
