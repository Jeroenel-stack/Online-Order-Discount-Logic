function calculateOrder(items) {
        const totalItems = items.length;
        const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

        let discount = 0;
        let discountName = "";

        if (totalPrice >= 5000) {
            discount = totalPrice * 0.2;
            discountName = "20% off";
        } else if (totalPrice > 1000) {
            discount = totalPrice * 0.1;
            discountName = "10% off";
        }

        if (totalItems >= 5 && discount < 100) {
            discount = 100;
            discountName = "₱100 flat discount";
        }

        const finalTotal = totalPrice - discount;

        console.log(`Total: ₱${totalPrice}`);
        console.log(`Discount: ₱${discount} (${discountName})`);
        console.log(`Final Total: ₱${finalTotal}`);
    }

    calculateOrder([
        { name: "Mouse", price: 200 },
        { name: "Keyboard", price: 800 },
        { name: "Monitor", price: 3000 },
        { name: "USB", price: 500 },
        { name: "Headset", price: 800 }
    ]);