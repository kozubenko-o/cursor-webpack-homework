export const potato = 15.678;
const cheese = 123.965;
const banana = 90.2345;
const sum = potato + cheese + banana;
const discount = Math.floor(Math.random() * 49 + 1); // випадкова знижка від 1% до 50%
export const buttonPrintHW1 = document.createElement('button');
buttonPrintHW1.innerHTML = "Print";
document.body.append(buttonPrintHW1);
buttonPrintHW1.addEventListener('click', () => print());

function print() {
    console.log('Максимальне число: ' + Math.max(potato, cheese, banana));
    console.log('Мінімальне число: ' + Math.min(potato, cheese, banana));
    console.log('Сума всіх товарів: ' + sum);
    console.log('Сума товарів(округлених в меншу сторону): ' +
        `${Math.floor(potato) + Math.floor(cheese) + Math.floor(banana)}`);
    console.log('Сума товарів округлена до сотень: ' + Math.round(sum / 100) * 100);
    console.log(`Сума всіх товарів округлена в меншу сторону(${Math.floor(sum)}) парне число: ` +
        (Math.floor(sum) % 2 === 0));
    console.log('Сума решти при оплаті всіх товарів з 500: ' + (500 - sum));
    console.log('Середнє значення цін, округлене до другого знаку: ' +
        ((potato + cheese + banana) / 3).toFixed(2));
    console.log('Повна вартість ' + sum + ', знижка ' + discount + '%(' + ((discount * sum) / 100) + '), до оплати: ' +
        (sum - ((discount * sum) / 100)).toFixed(2));
    console.log('Чистий прибуток: ' + (sum / 2 - ((discount * sum) / 100)));


    document.writeln(
        `<p>Максимальне число: ${Math.max(potato, cheese, banana)}</p>
<p>Мінімальне число: ${Math.min(potato, cheese, banana)}</p>
<p>Сума всіх товарів: ${sum}</p>
<p>Сума товарів(округлених в меншу сторону): ${Math.floor(potato) + Math.floor(cheese) + Math.floor(banana)}</p>
<p>Сума товарів округлена до сотень: ${Math.round(sum / 100) * 100}</p>
<p>Сума всіх товарів округлена в меншу сторону(${Math.floor(sum)}) парне число: ${Math.floor(sum) % 2 === 0}</p>
<p>Сума решти при оплаті всіх товарів з 500: ${500 - sum}</p>
<p>Середнє значення цін, округлене до другого знаку: ${((potato + cheese + banana) / 3).toFixed(2)}</p>
<p>Повна вартість ${sum}, знижка ${discount}%(${(discount * sum) / 100}), до оплати: ${(sum - ((discount * sum) / 100))
            .toFixed(2)}</p>
<p>Чистий прибуток: ${(sum / 2 - ((discount * sum) / 100))}</p>`
    );
}
