import { render, html } from "../node_modules/lit-html/lit-html.js";

let containerElement = document.getElementsByTagName("body")[0]

let toRenderHTML = html`
    <section id="years" class="yearsCalendar">
        <table class="calendar">
            <caption>2020 - 2023</caption>
            <tr class="months">
                <th class="month" colspan="4"></th>
            </tr>

            <tr class="days">
                <td @click=${year2020}class="day">
                    <div class="date">2020</div>
                </td>
                <td @click=${year2021} class="day">
                    <div class="date">2021</div>
                </td>
            </tr>

            <tr class="days">
                <td @click=${year2022} class="day">
                    <div class="date">2022</div>
                </td>
                <td @click=${year2023} class="day">
                    <div class="date">2023</div>
                </td>
            </tr>

        </table>
    </section>
`

render(toRenderHTML, containerElement)

function year2020(e){
    toRenderHTML = html`
    <section class="monthCalendar" id="year-2020">
        <table class="calendar">
            <caption>2020</caption>
            <tbody>
                <tr class="months">
                    <th class="month" colspan="4"></th>
                </tr>

                <tr class="days">
                    <td class="day">
                        <div class="date">Jan</div>
                    </td>
                    <td class="day">
                        <div class="date">Feb</div>
                    </td>
                    <td class="day">
                        <div class="date">Mar</div>
                    </td>
                    <td class="day">
                        <div class="date">Apr</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">May</div>
                    </td>
                    <td class="day">
                        <div class="date">Jun</div>
                    </td>
                    <td class="day">
                        <div class="date">Jul</div>

                    </td>
                    <td class="day">
                        <div class="date">Aug</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">Sept</div>
                    </td>
                    <td class="day">
                        <div class="date">Oct</div>
                    </td>
                    <td class="day">
                        <div class="date">Nov</div>
                    </td>
                    <td class="day">
                        <div class="date">Dec</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    `
    render(toRenderHTML, containerElement)
}

function year2021(e){
    toRenderHTML = html`
    <section class="monthCalendar" id="year-2021">
        <table class="calendar">
            <caption>2021</caption>
            <tbody>
                <tr class="months">
                    <th class="month" colspan="4"></th>
                </tr>

                <tr class="days">
                    <td class="day">
                        <div class="date">Jan</div>
                    </td>
                    <td class="day">
                        <div class="date">Feb</div>
                    </td>
                    <td class="day">
                        <div class="date">Mar</div>
                    </td>
                    <td class="day">
                        <div class="date">Apr</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">May</div>
                    </td>
                    <td class="day">
                        <div class="date">Jun</div>
                    </td>
                    <td class="day">
                        <div class="date">Jul</div>

                    </td>
                    <td class="day">
                        <div class="date">Aug</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">Sept</div>
                    </td>
                    <td class="day">
                        <div class="date">Oct</div>
                    </td>
                    <td class="day">
                        <div class="date">Nov</div>
                    </td>
                    <td class="day">
                        <div class="date">Dec</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    `
    render(toRenderHTML, containerElement)
}


function year2022(e){
    toRenderHTML = html`
    <section class="monthCalendar" id="year-2022">
        <table class="calendar">
            <caption>2022</caption>
            <tbody>
                <tr class="months">
                    <th class="month" colspan="4"></th>
                </tr>

                <tr class="days">
                    <td class="day">
                        <div class="date">Jan</div>
                    </td>
                    <td class="day">
                        <div class="date">Feb</div>
                    </td>
                    <td class="day">
                        <div class="date">Mar</div>
                    </td>
                    <td class="day">
                        <div class="date">Apr</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">May</div>
                    </td>
                    <td class="day">
                        <div class="date">Jun</div>
                    </td>
                    <td class="day">
                        <div class="date">Jul</div>

                    </td>
                    <td class="day">
                        <div class="date">Aug</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">Sept</div>
                    </td>
                    <td class="day">
                        <div class="date">Oct</div>
                    </td>
                    <td class="day">
                        <div class="date">Nov</div>
                    </td>
                    <td class="day">
                        <div class="date">Dec</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    `
    render(toRenderHTML, containerElement)
}


function year2023(e){
    toRenderHTML = html`
    <section class="monthCalendar" id="year-2023">
        <table class="calendar">
            <caption>2023</caption>
            <tbody>
                <tr class="months">
                    <th class="month" colspan="4"></th>
                </tr>

                <tr class="days">
                    <td class="day">
                        <div class="date">Jan</div>
                    </td>
                    <td class="day">
                        <div class="date">Feb</div>
                    </td>
                    <td class="day">
                        <div class="date">Mar</div>
                    </td>
                    <td class="day">
                        <div class="date">Apr</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">May</div>
                    </td>
                    <td class="day">
                        <div class="date">Jun</div>
                    </td>
                    <td class="day">
                        <div class="date">Jul</div>

                    </td>
                    <td class="day">
                        <div class="date">Aug</div>
                    </td>
                </tr>
                <tr>
                    <td class="day">
                        <div class="date">Sept</div>
                    </td>
                    <td class="day">
                        <div class="date">Oct</div>
                    </td>
                    <td class="day">
                        <div class="date">Nov</div>
                    </td>
                    <td class="day">
                        <div class="date">Dec</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    `
    render(toRenderHTML, containerElement)
}


```
This is how it should theoretically work. I am not insane to do this for every single month, for 4 years. I have better stuff to do than copy and paste code for a simple homework practice question. Sorry, not sorry.
```