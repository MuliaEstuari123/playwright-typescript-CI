
import { test,expect } from '@playwright/test';

let url = 'https://katalon-demo-cura.herokuapp.com/';
let username = 'John Doe';
let password = 'ThisIsNotAPassword';

test.describe('Login Tests', () => {

 test.beforeEach(async ({ page }) => {

    await page.goto(url);
    await expect(page.locator('#btn-make-appointment')).toBeVisible();
    await page.click('#btn-make-appointment');
 })
3

 test('verify halaman login tampil', async ({ page }) => {

 await expect(page.locator('#txt-username')).toBeVisible();
 await expect(page.locator('#txt-password')).toBeVisible();
 await expect(page.locator('#btn-login')).toBeVisible();

 })

 test('Login berhasil', async ({ page }) => {

    await page.locator('#txt-username').fill(username);
    await page.locator('#txt-password').fill(password);
    await page.locator('#btn-login').click();

    await expect(page.locator('h2:has-text("Make Appointment")')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.close();

 })


})




   



