import { test, expect } from '@playwright/test'


let urlajax = 'https://uitestingplayground.com/ajax'

test.beforeEach( async ({ page }) => {

    await page.goto(urlajax);

    await expect(page.getByText('Button Triggering AJAX Request', { exact: true })).toBeVisible();
    await page.getByText('Button Triggering AJAX Request', { exact: true }).click();

});

test ('auto waiting', async ( { page } ) => {

const successMessage = page.locator('p.bg-success');
await successMessage.waitFor({ state: 'visible' });
const messageText = await successMessage.textContent();




});

