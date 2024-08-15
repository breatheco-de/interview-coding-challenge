def reduce_gifts(prices=[], k=3, threshold=14):
    prices.sort(reverse=True)

    window_length = 0
    count = 0
    filtered_prices = prices.copy()
    for number in prices:
        print("summing: ", number)
        count = count + number
        window_length = window_length + 1
        print("count: ", count)
        if count > threshold:
            print("threshold exceded")
            count = count - filtered_prices[0]
            window_length = window_length - 1
            filtered_prices = filtered_prices[1:]
        if window_length == k:
            print("window length reached")
            return filtered_prices    # your code here

    return filtered_prices

prices = [3, 2, 1, 4, 6, 5]
k = 3
threshold = 14
print("Solution: ", reduce_gifts(prices, k, threshold))