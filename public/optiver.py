# E1 invalid input format
# E2 duplicate pair
# E3 parent has more than two children
# E4 multiple roots
# E5 tree contains cycle
import sys

class ErrorCode(Exception):
    pass

def tree_string(node, adj_list):

    if not node:
        return ""
    
    children = adj_list[node]
    child_1 = None
    child_2 = None

    if len(children) == 1:
        child_1 = children[0]
    elif len(children) == 2:
        if children[0] < children[1]:
            child_1, child_2 = children[0], children[1]
        else:
            child_1, child_2 = children[1], children[0]
    
    return f"({node}{tree_string(child_1, adj_list)}{tree_string(child_2, adj_list)})"

def is_valid_pair_string(pair):
    def is_uppercase_letter(letter):
        return letter >= "A" and letter <= "Z"

    return (
        len(pair) == 5 and \
        pair[0] == "(" and \
        is_uppercase_letter(pair[1]) and \
        pair[2] == "," and \
        is_uppercase_letter(pair[3]) and \
        pair[4] == ")"
        )

def parse_input():
    read_line = False
    pairs = []

    line = sys.stdin.readline()

    # handle E1, invalid input format
    pair_strings = line.split(" ")
    for pair_string in pair_strings:
        if not is_valid_pair_string(pair_string):
            raise ErrorCode("E1")
        pairs.append((pair_string[1], pair_string[3]))
    
    # handle E2, duplicate pair
    if len(set(pairs)) != len(pairs):
        raise ErrorCode("E2")

    return pairs

def validate_graph(adj_list, inverse_adj_list):

    # handle E3, parent has more than two children
    for node, children in adj_list.items():
        if len(children) > 2:
            raise ErrorCode("E3")

    # handle E4, multiple roots
    root = None
    for child, parents in inverse_adj_list.items():
        if len(parents) == 0:
            if root:
                raise ErrorCode("E4")
            root = child
    
    # handle E5, input contains cycle
    for child, parents in inverse_adj_list.items():
        if len(parents) > 1:
            raise ErrorCode("E5")
    
    return root

def construct_graph(pairs):

    # parent to children
    adj_list = {}

    # children to parents
    inverse_adj_list = {}

    for parent, child in pairs:

        if parent not in adj_list:
            adj_list[parent] = []
        if child not in adj_list:
            adj_list[child] = []
        adj_list[parent].append(child)

        if parent not in inverse_adj_list:
            inverse_adj_list[parent] = []
        if child not in inverse_adj_list:
            inverse_adj_list[child] = []
        inverse_adj_list[child].append(parent)

    return adj_list, inverse_adj_list

def giving_tree():

    # handle errors E1 and E2 and parse the input
    pairs = parse_input()

    # construct the graph
    adj_list, inverse_adj_list = construct_graph(pairs)

    # handle errors E3, E4, E5 and return the root of the graph
    root = validate_graph(adj_list, inverse_adj_list)

    # print string representation from root
    return tree_string(root, adj_list)


if __name__ == "__main__":
    try:
        tree_string = giving_tree()
        print(tree_string)
    except ErrorCode as error_code:
        print(error_code)

        # Input #2
        #     (A,B)    (A,C) (B, E) (B,F)
        # Output:
        #     E1
        # Input #3
        #     (A,B) (B,C) (A,B) (A,C)
        # Output:
        #     E2
        # Input #4
        #     (A,B) (A,C) (A,D) (B,E)
        # Output:
        #     E3
        # Input #5
        #     (A,C) (A,C) (B,D) (E,F) (F,G) (F,H)
        # Output:
        #     E4
        # Input #6
        #     (A,B) (A,C) (B,D) (D,C)
        # Output:
        #     E5
