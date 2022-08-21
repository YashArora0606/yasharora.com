
def isLeapYear(y):
    return y % 4 == 0 and not (y % 100 == 0 and y % 400 != 0)

def daysInMonth(m, y):

    if m  == 2:
        if isLeapYear(y):
            return 29
        return 28
    
    long_months = {1, 3, 5, 7, 8, 10, 12}
    short_months = {4, 6, 9, 11}

    if m in long_months:
        return 31
    
    if m in short_months:
        return 30

    return None

def daysBetweenDates(y1, m1, d1, y2, m2, d2):

    cur_m = m1
    cur_d = d1
    cur_y = y1

    # calculate number of days until from start date to january 1st, y2
    days_until_y2 = 0
    while cur_y < y2:

        # bring to 1st day of next month if partway through month
        if cur_d > 1:
            days_until_next_month = daysInMonth(cur_m, cur_y) + 1 - cur_d
            days_until_y2 += days_until_next_month
            cur_m += 1
            cur_d = 1

        # iterate through all months in year
        while cur_m <= 12:
            days_until_y2 += daysInMonth(cur_m, cur_y)
            cur_m += 1

        # reset month and update year
        cur_m %= 12
        cur_y += 1
    
    # calculate number of days from january 1st, y2 to end date
    days_from_y2_to_end_date = 0
    if cur_y == y2:

        # bring to 1st day of next month if partway through month
        if cur_d > 1:
            days_until_next_month = daysInMonth(cur_m, cur_y) + 1 - cur_d
            days_from_y2_to_end_date += days_until_next_month
            cur_m += 1
            cur_d = 1

        # iterate until desired month
        while cur_m < m2:
            days_from_y2_to_end_date += daysInMonth(cur_m, cur_y)
            cur_m += 1

        # add number of days within the month
        if cur_m == m2:
            days_from_y2_to_end_date += d2 - cur_d

    return days_until_y2 + days_from_y2_to_end_date
        





if __name__ == "__main__":
    # print(daysBetween(y1, m1, d1, y2, m2, d2))
    print (daysBetweenDates(2012,1,1,2012,2,28))
    # 58
    print (daysBetweenDates(2012,1,1,2012,3,1))
    # 60
    print (daysBetweenDates(2011,6,30,2012,6,30))
    # 366
    print (daysBetweenDates(2011,1,1,2012,8,8))
    # 585
    print (daysBetweenDates(1900,1,1,1999,12,31))
    # 36523