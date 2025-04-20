import os

def find_string_in_files(directory_path, search_string):
    """
    Searches for a specific string in all files within a directory and its subdirectories.

    Args:
        directory_path (str): The path to the directory to start searching from.
        search_string (str): The string to search for.
    """
    print(f"Searching for '{search_string}' in files under: {directory_path}")
    print("-" * 30)

    if not os.path.isdir(directory_path):
        print(f"Error: Directory not found at {directory_path}")
        return

    found_count = 0

    # Walk through the directory tree
    for root, _, files in os.walk(directory_path):
        for file in files:
            file_path = os.path.join(root, file)

            try:
                # Open and read the file line by line
                # Use 'errors="ignore"' to skip lines with encoding issues
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    for line_num, line in enumerate(f, 1): # Start line numbers from 1
                        # Check if the search string is in the line
                        if search_string in line:
                            print(f"Found in {file_path} at line {line_num}")
                            found_count += 1

            except Exception as e:
                # Catch other potential file reading errors
                print(f"Error reading file {file_path}: {e}")

    print("-" * 30)
    if found_count == 0:
        print(f"No occurrences of '{search_string}' found.")
    else:
        print(f"Search complete. Found '{search_string}' {found_count} time(s).")
    print("-" * 30)


if __name__ == "__main__":
    # Define the string to search for
    string_to_find = "mix-blend-mode: difference"


    # Get the directory where the script is located
    # This will be the starting point for os.walk()
    script_directory = os.path.dirname(os.path.abspath(__file__))

    # Run the search function
    find_string_in_files(script_directory, string_to_find)
