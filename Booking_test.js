/// <reference path="./steps.d.ts" />
moment = require('moment');

const checkinDate = moment().add(3, 'months');

Feature('Booking');

Scenario('Book a hotel', async ({ I }) => {
    I.amOnPage('/');
    I.wait(2);
    I.click("Accept");
    I.fillField("ss", "Toronto");
    I.wait('1');
    I.click('li[data-label="Toronto, Ontario, Canada"]');
   // I.fillField('js-date-field__month', checkinDate.format('MM'))
   //I.fillField('sb-date-field__select-field js-date-field__select', checkinDate.format('DD'));
   // I.fillField('js-date-field__year', checkinDate.format('YY'));
    I.click("Search");
    I.see("properties found");

    const hotelNames = await I.grabTextFrom('//*[@id="search_results_table"]/div/div/div/div/div[6]/div[4]/div[1]/div[2]/div/div/div[1]/div/div[1]/div');
    console.log(hotelNames);
    const hotelName = hotelNames[0];
    I.click(hotelName, '//*[@id="search_results_table"]/div/div/div/div/div[6]/div[4]/div[1]/div[2]/div/div/div[1]/div/div[1]/div/h3/a/div[1]');
    I.switchToNextTab();
    I.see(hotelName, 'h2');
    I.seeInTitle(hotelName);
});
