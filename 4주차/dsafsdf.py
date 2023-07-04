vars_list = []
for i in range(2, 101, 2):
    vars_list.append("var" + str(i))

# 값 입력
for var_name in vars_list:
    var_value = int(input("Enter a value for " + var_name + ": "))
    globals()[var_name] = var_value

# 값 출력
for var_name in vars_list:
    print(var_name + " = " + str(globals()[var_name]))