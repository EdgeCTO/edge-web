

// Select the parent container
    const shoppingItemContainer = document.getElementById("itemContent");

    // Create the MutationObserver
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === "attributes") {
                updateItemClasses();
            }
        });
    });

    // Target the 'ad-image' inside 'item-container product0' for observation
    function observeAdImage() {
        const product0 = document.querySelector(".item-container.product0 .ad-image");
        if (product0) {
            observer.observe(product0, { attributes: true, attributeFilter: ["src"] });
        }
    }

    // Function to update the classes of items
    function updateItemClasses() {
        // Disconnect the observer temporarily to avoid multiple triggers
        observer.disconnect();

        // Get all items in the container
        const items = Array.from(
            shoppingItemContainer.querySelectorAll(".item-container")
        );

        // Update each item's class
        for (let i = items.length - 1; i >= 0; i--) {
            const currentClass = `product${i}`;
            const newClass = `product${i + 1}`;
            if (items[i].classList.contains(currentClass)) {
                items[i].classList.replace(currentClass, newClass);
            }
        }

        // Add a new item-container product0 at the beginning
        const newProduct0 = createNewProduct0();
        shoppingItemContainer.prepend(newProduct0);

        // Remove the 'product11' if it exists
        const product12 = shoppingItemContainer.querySelector(
            ".item-container.product12"
        );
        if (product12) {
            product12.remove();
        }

        // Reobserve the 'ad-image' inside the new product0
        observeAdImage();
    }

    // Function to create a new product0 element
    function createNewProduct0() {
        const template = `
<div id="w-node-fe4a92c6-51c4-e0dc-9384-28e18026fd5b-446197ef" class="item-container product0">
<div class="flip-card w-node-fe4a92c6-51c4-e0dc-9384-28e18026fd5c-446197ef">
    <div class="vend-logo-cont"><img data-role="vendor-logo" id="vendLogo10" alt=""
            src="https://cdn.prod.website-files.com/65dc7230257517ba67df2f52/669952918f9e2e7c0295caf8_logo-loading.gif"
            loading="lazy" class="vend-logo">
        <p class="p43">Tours &amp; Tickets</p>
        <p data-role="vendor-name" class="vendor-name">Vendor Name</p>
    </div>
    <div class="flip-card-inner">
        <div class="flip-card-front"><a target="_blank" data-role="product-link" href="#"
                class="ad-image-container w-inline-block"><img data-role="product-image" id="ad-image-10" alt=""
                    src="https://cdn.prod.website-files.com/65dc7230257517ba67df2f52/65fca19408056338fb9b0b9b_edge-face.png" class="ad-image"></a>
            <div class="buy-buttons"><a target="_blank" data-role="product-link" href="#"
                    class="buy-now w-inline-block">
                    <p class="buy-text">Buy Now</p>
                </a><a data-role="event-link" href="#" target="_blank" class="get-ticket w-inline-block">
                    <p class="buy-text">Buy Ticket</p>
                </a><a data-role="coupon-link" href="#" target="_blank" class="redeem-deal w-inline-block">
                    <p class="buy-text">Redeem <span data-role="coupon-type">Now</span></p>
                </a></div>
        </div>
        <p data-role="product-name" class="product-name">Product Name....</p>
    </div>
    <div class="ai-queries"><img
            src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy"
            data-role="frame-image" alt="" class="frame-img ticket-style">
        <p class="ai-queries-p">AI Catch:<br><span data-role="ai-description">AI Description</span></p>
        <div class="ticket-details ticket-style">
            <p data-role="event-name" class="event-name">event name</p>
            <p data-role="event-location" class="event-location">event location</p>
            <p data-role="event-date" class="event-date">event date</p><a data-role="event-link" href="#"
                target="_blank" class="get-ticket details w-inline-block">
                <p class="buy-ticket-p">Buy Ticket</p>
            </a>
        </div>
        <button class="info-close" onclick="closeAiQueries(this)">
            <div class="close-black w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 38" fill="none">
                    <path class="info-close-path" d="M34 4L4 34" stroke-width="4" stroke-linecap="round">
                    </path>
                    <path class="info-close-path" d="M4 4L34 34" stroke-width="4" stroke-linecap="round">
                    </path>
                </svg>
            </div>
        </button>
        <div class="coupon-details">
            <div>
                <p class="paragraph-47"><span class="text-span-25"> %</span> <span data-role="coupon-type"
                        class="text-span-23">Coupon Type</span> by <span data-role="vendor-name"
                        class="text-span-24">Vendor name</span></p>
            </div>
            <p data-role="coupon-date" class="coupon-end-date">End Date</p>
            <p data-role="ai-description" class="coupon-description"></p>
            <p class="coupon-terms"></p><a data-role="coupon-link" href="#" target="_blank"
                class="redeem-deal details w-inline-block">
                <p class="coupon-style">Redeem Now</p>
            </a>
        </div>
    </div>
    <div class="productbuttons">

        <!-- Define a reusable filter for the shadow -->
        <svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="white" flood-opacity="1">
                    </feDropShadow>
                </filter>
            </defs>
        </svg>


        <!-- Like Button -->
        <button data-role="like" class="product-button w-inline-block">
            <div class="details-button w-embed">

                <svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="24" height="22"
                    viewBox="0 0 24 22" fill="#fff6">
                    <path
                        d="M21.3036 2.70184C20.766 2.16231 20.1278 1.73431 19.4253 1.4423C18.7228 1.1503 17.9699 1 17.2095 1C16.4491 1 15.6961 1.1503 14.9936 1.4423C14.2912 1.73431 13.6529 2.16231 13.1153 2.70184L11.9997 3.82104L10.8841 2.70184C9.79827 1.61253 8.32556 1.00056 6.78997 1.00056C5.25437 1.00056 3.78167 1.61253 2.69584 2.70184C1.61001 3.79115 1 5.26857 1 6.80908C1 8.34959 1.61001 9.82701 2.69584 10.9163L11.9997 20.25L21.3036 10.9163C21.8414 10.377 22.268 9.73674 22.5591 9.03201C22.8502 8.32728 23 7.57192 23 6.80908C23 6.04624 22.8502 5.29088 22.5591 4.58615C22.268 3.88142 21.8414 3.24112 21.3036 2.70184Z"
                        stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        filter="url(#shadow)"></path>
                </svg>
            </div>
        </button>


        <!-- Dislike Button -->
        <button data-role="dislike" class="product-button w-inline-block">
            <div class="details-button w-embed">

                <svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="24" height="22"
                    viewBox="0 0 24 23" fill="none">

                    <path
                        d="M21.3841 3.86417C20.8722 3.31265 20.2643 2.87514 19.5953 2.57664C18.9262 2.27815 18.2091 2.12451 17.485 2.12451C16.7608 2.12451 16.0437 2.27815 15.3746 2.57664C14.7056 2.87514 14.0977 3.31265 13.5858 3.86417L12.5233 5.00823L11.4608 3.86417C10.4267 2.75065 9.02409 2.12509 7.56162 2.12509C6.09915 2.12509 4.69658 2.75065 3.66245 3.86417C2.62833 4.97768 2.04736 6.48793 2.04736 8.06267C2.04736 9.63741 2.62833 11.1477 3.66245 12.2612L12.5233 21.8022L21.3841 12.2612C21.8963 11.7099 22.3026 11.0554 22.5798 10.335C22.8571 9.6146 22.9997 8.84246 22.9997 8.06267C22.9997 7.28288 22.8571 6.51074 22.5798 5.79035C22.3026 5.06995 21.8963 4.41543 21.3841 3.86417Z"
                        fill="#fff6" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        filter="url(#shadow)"></path>
                    <path d="M21.9526 20.1155L1.00025 1" stroke="black" stroke-width="2" stroke-linecap="round"
                        filter="url(#shadow)"></path>

                </svg>
            </div>
        </button>


        <!-- Share Button -->
        <button data-role="share-link" class="product-button w-inline-block">
            <div class="details-button w-embed">

                <svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                    viewBox="0 0 22 25" fill="#fff6">
                    <path
                        d="M7.21111 13.7889L14.8 18.2111M14.7889 6.01111L7.21111 10.4333M21 4.33333C21 6.17428 19.5076 7.66667 17.6667 7.66667C15.8257 7.66667 14.3333 6.17428 14.3333 4.33333C14.3333 2.49238 15.8257 1 17.6667 1C19.5076 1 21 2.49238 21 4.33333ZM7.66667 12.1111C7.66667 13.9521 6.17428 15.4444 4.33333 15.4444C2.49238 15.4444 1 13.9521 1 12.1111C1 10.2702 2.49238 8.77778 4.33333 8.77778C6.17428 8.77778 7.66667 10.2702 7.66667 12.1111ZM21 19.8889C21 21.7298 19.5076 23.2222 17.6667 23.2222C15.8257 23.2222 14.3333 21.7298 14.3333 19.8889C14.3333 18.0479 15.8257 16.5556 17.6667 16.5556C19.5076 16.5556 21 18.0479 21 19.8889Z"
                        stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        filter="url(#shadow)"></path>
                </svg>
            </div>
        </button>


        <!-- Info Button -->
        <button class="product-button info-open w-inline-block" onclick="openAiQueries(this)">
            <div class="details-button w-embed">

                <svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="#fff6">
                    <path
                        d="M12.0094 17.634V14.5878V11.5417M12.0094 7.14167H12.0204M23 12C23 18.0751 18.0752 23 12 23C5.92489 23 1.00002 18.0751 1.00002 12C1.00002 5.92487 5.92489 1 12 1C18.0752 1 23 5.92487 23 12Z"
                        stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        filter="url(#shadow)"></path>
                </svg>
            </div>
        </button>


        <a target="_blank" data-role="more-link" href="#" class="product-button similar-search w-inline-block">
            <img src="https://cdn.prod.website-files.com/65dc7230257517ba67df2f52/6712f9b51f308d434af51d75_amazon-tile.svg"
                loading="lazy" alt="" class="amazon-search-icon">
            <div class="search-icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%"
                    viewBox="0 0 48 48">
                    <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)">
                    </path>
                    <path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"></path>
                    <path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z"
                        transform="rotate(-45.001 38.24 38.24)"></path>
                    <path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"></path>
                    <path fill="#BBDEFB"
                        d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z">
                    </path>
                </svg>
            </div>
        </a>
    </div>
</div>
</div>`;
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        return tempDiv.firstChild;
    }

    // Initial setup
    observeAdImage();

    function openAiQueries(buttonElement) {
        // Find the closest item-container to the button
        const container = buttonElement.closest(".item-container");
        const aiQueries = container.querySelector(".ai-queries");

        // Add the 'active' class to open the ai-queries div
        aiQueries.classList.add("active");
    }

    function closeAiQueries(buttonElement) {
        // Find the closest item-container to the button
        const container = buttonElement.closest(".item-container");
        const aiQueries = container.querySelector(".ai-queries");

        // Remove the 'active' class to close the ai-queries div
        aiQueries.classList.remove("active");
    }

    // Select all item containers
    const itemContainers = document.querySelectorAll(".item-container");

    itemContainers.forEach((container) => {
        const infoOpenButton = container.querySelector(".product-button.info-open");
        const infoCloseButton = container.querySelector(".info-close");
        const aiQueries = container.querySelector(".ai-queries");

        // Open the ai-queries div by adding the 'active' class
        infoOpenButton.addEventListener("click", () => {
            aiQueries.classList.add("active");
        });

        // Close the ai-queries div by removing the 'active' class
        infoCloseButton.addEventListener("click", () => {
            aiQueries.classList.remove("active");
        });
    });