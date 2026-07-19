var GIFT_OCCASION_TYPE_PAGE = `
            <div class="gift-occasion-page">
                <div>
                    <p class="gift-occasion-title">Gift Occasion</p>
                </div>

                <div class="gift-occasion-options">
                    <div class="gift-occasion-item-box" onclick="change_page('COOKIE_SELECTION_PAGE', 'GIFT_OCCASION', 'BIRTHDAY')">
                        <img src="./images/birthday-icon.png">
                        <p>Birthday</p>
                    </div>
                    <div class="gift-occasion-item-box" onclick="change_page('COOKIE_SELECTION_PAGE', 'GIFT_OCCASION', 'GRADUATION')">
                        <img src="./images/graduation-icon.png">
                        <p>Graduation</p>
                    </div>
                    <div class="gift-occasion-item-box" onclick="change_page('COOKIE_SELECTION_PAGE', 'GIFT_OCCASION', 'THANK_YOU')">
                        <img src="./images/thankyou-icon.png">
                        <p>Thank You</p>
                    </div>
                    <div class="gift-occasion-item-box" onclick="change_page('COOKIE_SELECTION_PAGE', 'GIFT_OCCASION', 'CONGRATULATIONS')">
                        <img src="./images/congratulations-icon.png">
                        <p>Congratulations</p>
                    </div>
                </div>
            </div>`;


var COOKIE_SELECTION_PAGE = `

            <div class="cookie-selection-page">
                <div>
                    <p class="cookie-selection-title">Cookie Selection</p>
                </div>

                <div class="cookie-selection-batch-options">
                    <div>
                        <p class="batch-options-title">Batch Options</p>
                    </div>

                    <div class="cookie-batch-item-box-container">
                        <div class="cookie-batch-item-box" onclick="display_cookie_selection('HALF_DOZEN')">
                            <p>Half Dozen</p>
                            <p id="hd-batch-price">$10.00</p>
                        </div>
                        <div class="cookie-batch-item-box" onclick="display_cookie_selection('DOZEN')">
                            <p>Dozen</p>
                            <p id="d-batch-price">$15.00</p>
                        </div>
                    </div>
                </div>

                <div class="cookie-selection-cookie-options" id="cookie_selection_div"></div>
            </div>
`;


var COOKIE_SELECTION_DIV = ` 
        <div>
        <p class="cookie-live-count" id="live_cookie_counter">Cookie Count : 0/0</p>
        </div>

        <div class="cookie-selection-cookie-option-item-container">
            <div class="cookie-selection-cookie-option-item">
                <img src="./images/cookie-break.png">
                <p>Chocolate Chip</p>
                <label>Input Number of Cookies: </label>
                <br>
                <input type="number" placeholder="0" id="chocolate_chip_amount_input">
            </div>
            <div class="cookie-selection-cookie-option-item">
                <img src="./images/cookie-break.png">
                <p>M&Ms</p>
                <label>Input Number of Cookies: </label>
                <br>
                <input type="number" placeholder="0" id="mm_amount_input">
            </div>
            <div class="cookie-selection-cookie-option-item">
                <img src="./images/cookie-break.png">
                <p>Double Chocolate</p>
                <label>Input Number of Cookies: </label>
                <br>
                <input type="number" placeholder="0" id="double_chocolate_amount_input">
            </div>
            <div class="cookie-selection-cookie-option-item">
                <img src="./images/cookie-break.png">
                <p>Oatmeal</p>
                <label>Input Number of Cookies: </label>
                <br>
                <input type="number" placeholder="0" id="oatmeal_amount_input">
            </div>
        </div>

    <a class="cookie-selection-continue-button" onclick="save_cookie_selection()">Continue</a>
`;

var GIFT_ORDER_INFORMATION_PAGE = `
            <div class="submit-order-page">

                <!--Left Container-->
                <div class="submit-order-page-left-container">
                    <!--Title-->
                    <div>
                        <p class="submit-order-page-title-text">Gift Delivery Order</p>
                    </div>

                    <!--Image-->
                    <div>
                        <img src="https://placehold.co/500x500">
                    </div>

                    <!--Order List-->
                    <div>
                        <div id="cookie-selected-list-div">
                            
                        </div>
                    </div>

                </div>


                <!--Right Container-->
                <div class="submit-order-page-right-container">
                    <!--Description-->
                    <div>
                        <b><p>Order Description</p></b>
                        <p>All gifts will come with a balloon and a card. You can select an extra gift to add to your package. Your will also come with a custom card that you can write a message for at no charge.</p>
                        <p style="color:red;">* <span style="color:black;">Required</span></p>
                    </div>
                    <!--

                    <div>
                        <p>Add Extra Gift?<span style="color:red;">*</span></p>
                    </div>-->
                    <!--Extra Gifts Selection-->
                    <!--
                    <div class="extra-gift-selection-container">
                        <div class="extra-gift-selection" id="extra-gift-teddybear" onclick="select_extra_gift('TEDDY_BEAR', 'extra-gift-teddybear')">
                            <img src="https://placehold.co/50">
                            <p>Teddy Bear</p>
                            <p>+$5</p>
                        </div>
                        <div class="extra-gift-selection" id="extra-gift-plant" onclick="select_extra_gift('PLANT', 'extra-gift-plant')">
                            <img src="https://placehold.co/50">
                            <p>Succulant Plant</p>
                            <p>+$5</p>
                        </div>
                        <div class="extra-gift-selection" id="extra-gift-none" onclick="select_extra_gift('NONE', 'extra-gift-none')">
                            <img src="https://placehold.co/50">
                            <p>None</p>
                        </div>
                    </div> -->

                    <!--Gift Message-->
                    <div>
                        <b><p>Write A Custom Gift Message</p></b>
                        <textarea class="gift-custom-message-textarea" id="custom-gift-message"></textarea>
                    </div>

                    <!--Delivery Date and Time-->
                    <div class="delivery-date-time-container">
                        <div class="delivery-date-input-container">
                            <b><p>Delivery Date <span style="color:red;">*</span></p></b>
                            <input type="date" id="gift-delivery-date"/>
                        </div>
                        <div>
                            <b><p>Delivery Time <span style="color:red;">*</span></p></b>
                            <select name="delivery-time-ranges" id="gift-delivery-time-ranges">
                                <option value="8-9">8:00am - 9:00am</option>
                                <option value="9-10">9:00am - 10:00am</option>
                                <option value="10-11">10:00am - 11:00am</option>
                                <option value="11-12">11:00am - 12:00pm</option>
                                <option value="12-1">12:00pm - 1:00pm</option>
                                <option value="1-2">1:00pm - 2:00pm</option>
                                <option value="2-3">2:00pm - 3:00pm</option>
                                <option value="3-4">3:00pm - 4:00pm</option>
                                <option value="4-5">4:00pm - 5:00pm</option>
                                <option value="5-6">5:00pm - 6:00pm</option>
                                <option value="6-7">6:00pm - 7:00pm</option>
                            </select>
                        </div>
                    </div>

                    <!-- Delivery Address -->
                    <div>
                        <b><p>Delivery Address</p></b>
                        <label>Address 1 <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-delivery-address1"/><br><br>
                        <label>Address 2 <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-delivery-address2" /><br><br>
                        <label>City <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-delivery-city" /><br><br>
                        <label>State</label><br>
                        <input type="text" placeholder="Minnesota" value="Minnesota" disabled/><br><br>
                        <label>Zip Code <span style="color:red;">*</span></label><br>
                        <input type="number" id="gift-delivery-zipcode" /><br><br>
                    </div>

                    <!-- Sender Information -->
                    <div>
                        <p>Sender Contact Information</p>
                        <label>Your Email <span style="color:red;">*</span></label><br>
                        <input type="email" id="gift-sender-email"/><br><br>
                        <label>Your Phone Number <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-sender-number"/><br><br>
                    </div>
                    <br><br>
                    <!--Submit Order Button-->
                    <div>
                        <a class="submit-order-page-button" onclick="gift_proceed_to_payment()">Proceed To Payment</a>
                    </div>
                    <br><br><br><br>

                </div>
            </div>
`;

var PERSONAL_ORDER_INFORMATION_PAGE = `
            <div class="submit-order-page">

                <!--Left Container-->
                <div class="submit-order-page-left-container">
                    <!--Title-->
                    <div>
                        <p class="submit-order-page-title-text">Personal Cookie Delivery Order</p>
                    </div>

                    <!--Image-->
                    <div>
                        <img src="https://placehold.co/500x500">
                    </div>

                    <!--Order List-->
                    <div>
                        <div id="cookie-selected-list-div">
                            
                        </div>
                    </div>

                </div>


                <!--Right Container-->
                <div class="submit-order-page-right-container">
                    <!--Description-->
                    <div>
                        <b><p>Order Description</p></b>
                        <p>Warm and fresh cookies delivered to you!</p>
                        <p style="color:red;">* <span style="color:black;">Required</span></p>
                    </div>

                    <!--Delivery Date and Time-->
                    <div class="delivery-date-time-container">
                        <div class="delivery-date-input-container">
                            <b><p>Delivery Date <span style="color:red;">*</span></p></b>
                            <input type="date" id="gift-delivery-date"/>
                        </div>
                        <div>
                            <b><p>Delivery Time <span style="color:red;">*</span></p></b>
                            <select name="delivery-time-ranges" id="gift-delivery-time-ranges">
                                <option value="8-9">8:00am - 9:00am</option>
                                <option value="9-10">9:00am - 10:00am</option>
                                <option value="10-11">10:00am - 11:00am</option>
                                <option value="11-12">11:00am - 12:00pm</option>
                                <option value="12-1">12:00pm - 1:00pm</option>
                                <option value="1-2">1:00pm - 2:00pm</option>
                                <option value="2-3">2:00pm - 3:00pm</option>
                                <option value="3-4">3:00pm - 4:00pm</option>
                                <option value="4-5">4:00pm - 5:00pm</option>
                                <option value="5-6">5:00pm - 6:00pm</option>
                                <option value="6-7">6:00pm - 7:00pm</option>
                            </select>
                        </div>
                    </div>

                    <!-- Delivery Address -->
                    <div>
                        <b><p>Delivery Address</p></b>
                        <label>Address 1 <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-delivery-address1"/><br><br>
                        <label>Address 2 <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-delivery-address2" /><br><br>
                        <label>City <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-delivery-city" /><br><br>
                        <label>State</label><br>
                        <input type="text" placeholder="Minnesota" value="Minnesota" disabled/><br><br>
                        <label>Zip Code <span style="color:red;">*</span></label><br>
                        <input type="number" id="gift-delivery-zipcode" /><br><br>
                    </div>

                    <!-- Sender Information -->
                    <div>
                        <p>Sender Contact Information</p>
                        <label>Your Email <span style="color:red;">*</span></label><br>
                        <input type="email" id="gift-sender-email"/><br><br>
                        <label>Your Phone Number <span style="color:red;">*</span></label><br>
                        <input type="text" id="gift-sender-number"/><br><br>
                    </div>
                    <br><br>
                    <!--Submit Order Button-->
                    <div>
                        <a class="submit-order-page-button" onclick="personal_proceed_to_payment()">Proceed To Payment</a>
                    </div>
                    <br><br><br><br>

                </div>
            </div>
`;

var ORDER_VARIABLES = new Map();
ORDER_VARIABLES.set("ORDER_TYPE", "");
ORDER_VARIABLES.set("GIFT_OCCASION", "");
ORDER_VARIABLES.set("BATCH_OPTION", "");
ORDER_VARIABLES.set("NUM_CHOCOLATE_CHIP", 0);
ORDER_VARIABLES.set("NUM_MM", 0);
ORDER_VARIABLES.set("NUM_DOUBLE_CHOCOLATE", 0);
ORDER_VARIABLES.set("NUM_OATMEAL", 0);
ORDER_VARIABLES.set("EXTRA_GIFT", "");
ORDER_VARIABLES.set("CUSTOM_GIFT_MESSAGE", "");
ORDER_VARIABLES.set("DELIVERY_DATE", "");
ORDER_VARIABLES.set("DELIVERY_TIME", "");
ORDER_VARIABLES.set("DELIVERY_ADDRESS_1", "");
ORDER_VARIABLES.set("DELIVERY_ADDRESS_2", "");
ORDER_VARIABLES.set("DELIVERY_CITY", "");
ORDER_VARIABLES.set("DELIVERY_STATE", "MINNESOTA");
ORDER_VARIABLES.set("ZIP_CODE", "");
ORDER_VARIABLES.set("SENDER_EMAIL", "");
ORDER_VARIABLES.set("SENDER_PHONE_NUMBER", "");



function select_extra_gift(gift_name, gift_box_id)
{
    ORDER_VARIABLES.set("EXTRA_GIFT", gift_name)
    document.getElementById("extra-gift-teddybear").style.border = "1px solid #000";
    document.getElementById("extra-gift-plant").style.border = "1px solid #000";
    document.getElementById("extra-gift-none").style.border = "1px solid #000";

    document.getElementById(gift_box_id).style.border = "3px solid #FF0000"
}

function check_cookie_limits()
{
    let total_cookie_sum = Number(document.getElementById('chocolate_chip_amount_input').value) + Number(document.getElementById('mm_amount_input').value) + Number(document.getElementById('double_chocolate_amount_input').value) + Number(document.getElementById('oatmeal_amount_input').value);
    let total_cookie_allowance = 0;

    if(ORDER_VARIABLES.get("BATCH_OPTION") == "HALF_DOZEN")
    {
        total_cookie_allowance = 6;
        if(total_cookie_sum <= total_cookie_allowance)
        {
            document.getElementById("live_cookie_counter").innerHTML = "Cookie Count : "+String(total_cookie_sum)+"/6";
        }else
        {
            alert('Cookie Limit Reached')
        }
    }else if(ORDER_VARIABLES.get("BATCH_OPTION") == "DOZEN")
    {
        total_cookie_allowance = 12;
        if(total_cookie_sum <= total_cookie_allowance)
        {
            document.getElementById("live_cookie_counter").innerHTML = "Cookie Count : "+String(total_cookie_sum)+"/12";
        }else
        {
            alert('Cookie Limit Reached')
        }
    }
}


var chocolate_chip_amount_input = null;

var mm_amount_input = null;

var double_chocolate_amount_input = null;

var oatmeal_amount_input = null;


function update_order_variable_button_press(variable_name_str, variable_value)
{
    if(variable_name_str)
    {
        ORDER_VARIABLES.set(String(variable_name_str), String(variable_value));
    }
}

function populate_order_page(page_name_variable)
{
    document.getElementById('main-container').innerHTML = window[page_name_variable];
}


function change_page(page_name_variable, variable_name_str, variable_value)
{
    update_order_variable_button_press(variable_name_str, variable_value);
    populate_order_page(page_name_variable);

    if(page_name_variable == "COOKIE_SELECTION_PAGE" && variable_name_str == "GIFT_OCCASION")
    {
        document.getElementById("hd-batch-price").innerHTML = "$25.00" 
        document.getElementById("d-batch-price").innerHTML =  "$30.00"
    }
}

function load_event_listener()
{
    chocolate_chip_amount_input = document.getElementById('chocolate_chip_amount_input');
    chocolate_chip_amount_input.addEventListener('input', () => {
        check_cookie_limits();
    });

    mm_amount_input = document.getElementById('mm_amount_input');
    mm_amount_input.addEventListener('input', () => {
        check_cookie_limits();
    });

    double_chocolate_amount_input = document.getElementById('double_chocolate_amount_input');
    double_chocolate_amount_input.addEventListener('input', () => {
        check_cookie_limits();
    });

    oatmeal_amount_input = document.getElementById('oatmeal_amount_input');
    oatmeal_amount_input.addEventListener('input', () => {
        check_cookie_limits();
    });
}

function display_cookie_selection(batch_amount)
{
    ORDER_VARIABLES.set("BATCH_OPTION", String(batch_amount));
    document.getElementById("cookie_selection_div").innerHTML = COOKIE_SELECTION_DIV;
    if(String(batch_amount) == "HALF_DOZEN")
    {
        document.getElementById("live_cookie_counter").innerHTML = "Cookie Count 0/6"
    }else if(String(batch_amount) == "DOZEN")
    {
        document.getElementById("live_cookie_counter").innerHTML = "Cookie Count 0/12"
    }

    if(!chocolate_chip_amount_input)
    {
        load_event_listener()
    }

}

function populate_cookie_selection_list()
{
    let cookie_list_html = `    
    <p>Cookies Selected</p>
    <hr>`;

    let chocoloate_chip_list = ORDER_VARIABLES.get("NUM_CHOCOLATE_CHIP") ? "<p>" + String(ORDER_VARIABLES.get("NUM_CHOCOLATE_CHIP")) + " X Chocolate Chip </p>" : "";
    let mm_list = ORDER_VARIABLES.get("NUM_MM") ? "<p>" + String(ORDER_VARIABLES.get("NUM_MM"))  + " X M&M </p>" : "";
    let double_chocoloate_list = ORDER_VARIABLES.get("NUM_DOUBLE_CHOCOLATE") ? "<p>" + String(ORDER_VARIABLES.get("NUM_DOUBLE_CHOCOLATE"))  + " X Double Chocolate </p>" : "";
    let oatmeal_list = ORDER_VARIABLES.get("NUM_OATMEAL") ? "<p>" + String(ORDER_VARIABLES.get("NUM_OATMEAL"))  + " X Oatmeal </p>" : "";
    
    let cookie_total_list_string_array = [chocoloate_chip_list, mm_list, double_chocoloate_list, oatmeal_list]
    for(let i = 0; i <= 3; i++)
    {
        if(cookie_total_list_string_array[i])
        {
            cookie_list_html+= (cookie_total_list_string_array[i]);
        }
    }

    if(ORDER_VARIABLES.get("BATCH_OPTION") == "DOZEN" && ORDER_VARIABLES.get("ORDER_TYPE") == "GIFT")
    {
        cookie_list_html += "<br><hr><b><p>Subtotal: $30.00</p></b>"
    }else if(ORDER_VARIABLES.get("BATCH_OPTION") == "HALF_DOZEN" && ORDER_VARIABLES.get("ORDER_TYPE") == "GIFT")
    {
        cookie_list_html += "<br><hr><b><p>Subtotal: $25.00</p></b>"
    }else if(ORDER_VARIABLES.get("BATCH_OPTION") == "DOZEN" && ORDER_VARIABLES.get("ORDER_TYPE") == "PERSONAL")
    {
        cookie_list_html += "<br><hr><b><p>Subtotal: $15.00</p></b>"
    }else if(ORDER_VARIABLES.get("BATCH_OPTION") == "HALF_DOZEN" && ORDER_VARIABLES.get("ORDER_TYPE") == "PERSONAL")
    {
        cookie_list_html += "<br><hr><b><p>Subtotal: $10.00</p></b>"
    }
    document.getElementById("cookie-selected-list-div").innerHTML = cookie_list_html;
}


function save_cookie_selection()
{
    let total_cookie_sum = Number(document.getElementById('chocolate_chip_amount_input').value) + Number(document.getElementById('mm_amount_input').value) + Number(document.getElementById('double_chocolate_amount_input').value) + Number(document.getElementById('oatmeal_amount_input').value);
    /*Check if selection is under the total alloted amount*/
    if(ORDER_VARIABLES.get("BATCH_OPTION") == "DOZEN")
    {
        if(total_cookie_sum < 12 || total_cookie_sum > 12)
        {
            alert("Please check cookie selection amount adds to 12 cookies!");
            return;
        }
        
    }else if(ORDER_VARIABLES.get("BATCH_OPTION") == "HALF_DOZEN")
    {
        if(total_cookie_sum < 6 || total_cookie_sum > 6)
        {
            alert("Please check cookie selection amount adds to 6 cookies!");
            return;
        }
    }

    ORDER_VARIABLES.set("NUM_CHOCOLATE_CHIP" , document.getElementById('chocolate_chip_amount_input').value);
    ORDER_VARIABLES.set("NUM_MM" , document.getElementById('mm_amount_input').value);
    ORDER_VARIABLES.set("NUM_DOUBLE_CHOCOLATE" , document.getElementById('double_chocolate_amount_input').value);
    ORDER_VARIABLES.set("NUM_OATMEAL" , document.getElementById('oatmeal_amount_input').value);

    if(ORDER_VARIABLES.get("ORDER_TYPE") == "GIFT")
    {
        populate_order_page("GIFT_ORDER_INFORMATION_PAGE");
    }else if(ORDER_VARIABLES.get("ORDER_TYPE") == "PERSONAL")
    {
        populate_order_page("PERSONAL_ORDER_INFORMATION_PAGE");
    }
    populate_cookie_selection_list();

    document.getElementById("gift-delivery-date").min = new Date().getFullYear() + "-" +  parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate()

}

function save_all_gift_delivery_information()
{
    ORDER_VARIABLES.set("CUSTOM_GIFT_MESSAGE", String(document.getElementById("custom-gift-message").value));
    ORDER_VARIABLES.set("DELIVERY_DATE", String(document.getElementById("gift-delivery-date").value));
    ORDER_VARIABLES.set("DELIVERY_TIME", String(document.getElementById("gift-delivery-time-ranges").value));
    ORDER_VARIABLES.set("DELIVERY_ADDRESS_1", String(document.getElementById("gift-delivery-address1").value));
    ORDER_VARIABLES.set("DELIVERY_ADDRESS_2", String(document.getElementById("gift-delivery-address2").value));
    ORDER_VARIABLES.set("DELIVERY_CITY", String(document.getElementById("gift-delivery-city").value));
    ORDER_VARIABLES.set("DELIVERY_STATE", "MINNESOTA");
    ORDER_VARIABLES.set("ZIP_CODE", String(document.getElementById("gift-delivery-zipcode").value));
    ORDER_VARIABLES.set("SENDER_EMAIL", String(document.getElementById("gift-sender-email").value));
    ORDER_VARIABLES.set("SENDER_PHONE_NUMBER", String(document.getElementById("gift-sender-number").value));
}

function check_gift_information_validity()
{
    let deliveryDate = document.getElementById("gift-delivery-date").value;
    let deliveryTime = document.getElementById("gift-delivery-time-ranges").value;
    let deliveryAddress = document.getElementById("gift-delivery-address1").value;
    let deliveryAddress2 = document.getElementById("gift-delivery-address2").value;
    let deliveryCity = document.getElementById("gift-delivery-city").value;
    let deliveryZip = document.getElementById("gift-delivery-zipcode").value;
    let senderEmail = document.getElementById("gift-sender-email").value;
    let senderNumber = document.getElementById("gift-sender-number").value;

    if(deliveryDate && deliveryTime && deliveryAddress && deliveryAddress2 && deliveryCity && deliveryZip && senderEmail && senderNumber)
    {
        return true;
    }else
    {
        alert("Please fill out all required fields with *");
        return false;
    }
}

function gift_proceed_to_payment()
{
    if(check_gift_information_validity())
    {
        save_all_gift_delivery_information();
        sendMessageOnClick();
    }
}

function save_all_personal_delivery_information()
{
    ORDER_VARIABLES.set("DELIVERY_DATE", String(document.getElementById("gift-delivery-date").value));
    ORDER_VARIABLES.set("DELIVERY_TIME", String(document.getElementById("gift-delivery-time-ranges").value));
    ORDER_VARIABLES.set("DELIVERY_ADDRESS_1", String(document.getElementById("gift-delivery-address1").value));
    ORDER_VARIABLES.set("DELIVERY_ADDRESS_2", String(document.getElementById("gift-delivery-address2").value));
    ORDER_VARIABLES.set("DELIVERY_CITY", String(document.getElementById("gift-delivery-city").value));
    ORDER_VARIABLES.set("DELIVERY_STATE", "MINNESOTA");
    ORDER_VARIABLES.set("ZIP_CODE", String(document.getElementById("gift-delivery-zipcode").value));
    ORDER_VARIABLES.set("SENDER_EMAIL", String(document.getElementById("gift-sender-email").value));
    ORDER_VARIABLES.set("SENDER_PHONE_NUMBER", String(document.getElementById("gift-sender-number").value));
}

function check_personal_information_validity()
{
    let deliveryDate = document.getElementById("gift-delivery-date").value;
    let deliveryTime = document.getElementById("gift-delivery-time-ranges").value;
    let deliveryAddress = document.getElementById("gift-delivery-address1").value;
    let deliveryAddress2 = document.getElementById("gift-delivery-address2").value;
    let deliveryCity = document.getElementById("gift-delivery-city").value;
    let deliveryZip = document.getElementById("gift-delivery-zipcode").value;
    let senderEmail = document.getElementById("gift-sender-email").value;
    let senderNumber = document.getElementById("gift-sender-number").value;

    if(deliveryDate && deliveryTime && deliveryAddress && deliveryAddress2 && deliveryCity && deliveryZip && senderEmail && senderNumber)
    {
        return true;
    }else
    {
        alert("Please fill out all required fields with *");
        return false;
    }
}

function personal_proceed_to_payment()
{
    if(check_personal_information_validity())
    {
        save_all_personal_delivery_information();
        sendMessageOnClick();
    }
}

function formatMessage()
{
    let message = "";
    ORDER_VARIABLES.forEach (function(value, key) {
        message += key + ' : ' + value + ", ";
    })

    return message
}



// Send data to email code
var sendMessageEndPoint = "https://www.api-contact-lite.com/sendMessage";

var ERROR_FLAG = "ERROR";

function endpointCall(endpoint=null, params={}, callBack=null)
{
    let endpointLink = identifyEndPoint(endpoint);
    const Http = new XMLHttpRequest();
    var params = JSON.stringify(params);
    Http.open( "POST", endpointLink );
    Http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    Http.send(params);
    Http.onreadystatechange = ( e ) => 
    {
        //If the request was successful then populate everything
        if (Http.readyState == 4 && Http.status == 200) 
        {
            //parse the response from power automate to make it readable for the functions
            callBack(JSON.parse( Http.responseText ));
            
        }else
        {
            callBack(ERROR_FLAG);
        }
    }
}

function identifyEndPoint(endpoint=null)
{
    switch(endpoint)
    {
        case "sendMessage":
            return sendMessageEndPoint;
    }
}

function sendMessage(callBack = null)
{

    let message = formatMessage();

    let params = {
        "organization": "mantisSoftware",
        "token": "c616bd12db4faa3a28b14cdf510311915b16d9c46117f194d496c0a0edead934",
        "name" : "",
        "companyName" : "The Toasty Cookie",
        "email" : "",
        "message": message
    };
    
    endpointCall("sendMessage", params, function(data)
    {
        //Store id and name in cookies for later use
        if(data["status"] == "success")
        {
            callBack('Successfully sent message!');
        }else if(data["status"] == "failed")
        {
            callBack("Failed to send message. Please try again!");
        }
    });
}

function sendMessageOnClick()
{
    sendMessage( function(responseMessage)
        {
            console.log('Message Sent')
        });
}




//email api connection, images, payment link