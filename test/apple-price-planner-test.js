describe('Apple price planner app', function() {
    it ('should return correct number ', function() {

		const applePrice = ApplePrice();

		//applePrice.numberOfPackets();
		

		assert.equal(2, applePrice.numberOfPackets());

	});

    it ('should return correct percent number ', function() {

		const applePrice = ApplePrice();

		
		

		assert.equal(null, applePrice.requiredProfitPercentage());

	});
	
});