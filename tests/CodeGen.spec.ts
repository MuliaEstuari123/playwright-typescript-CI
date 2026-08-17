import { test, expect } from '@playwright/test';


test('Timeout', async ({ page }) => {

    test.setTimeout(60000);
    await page.goto('https://uitestingplayground.com/ajax');

    const parentajax = page.locator("//body//section//div[@class='container']");

    await parentajax.getByRole('button', { name: 'Button Triggering AJAX Request'}).click({ timeout: 50000 });

});


test ('code generation', async ({ page }) => {

    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    await expect(page.locator('div.text-vertical-center', { hasText: 'Make Appointment'})).toBeVisible();
    await page.locator('div.text-vertical-center', { hasText : 'Make Appointment'}).getByRole('link', { name: 'Make Appointment'}).click();

    await page.locator('form.form-horizontal').getByLabel('Username').fill('artem');


});

