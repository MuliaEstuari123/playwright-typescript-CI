import { expect, test } from '@playwright/test';

let Url = 'https://katalon-demo-cura.herokuapp.com/';

test ('Locator Reusability', async ( { page } ) => {

await page.goto(Url);

const parentMakeAppointment = page.locator("div.text-vertical-center")
const ParentLogin = page.locator("//section[@id='login']//div[@class='row']")

'click Make Appointment'
await parentMakeAppointment.getByRole('link', { name: 'Make Appointment' }).click();

await expect(ParentLogin.locator('#txt-username')).toBeVisible();
await ParentLogin.locator('#txt-username').fill('John Doe');
await expect(ParentLogin.locator('#txt-password')).toBeVisible();
await ParentLogin.locator('#txt-password').fill('ThisIsNotAPassword');
await expect(page.locator('#btn-login')).toBeVisible();
await page.locator('#btn-login').click();
    
});











