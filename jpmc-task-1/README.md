# JPMC Task 1
# Purpose
To process the data feed of stock A and stock B’s price to enable us to analyse when trading for the stock should occur.

# Changes Made:

- getDataPoint returns a correct tuple of stock name, bid_price, ask_price and price ( as average of bid_price and ask_price)
- getRatio returns the ratio of the two stock prices if valid prices are available else "INVALID"
- main function prints the correct stock info, prices and ratio
