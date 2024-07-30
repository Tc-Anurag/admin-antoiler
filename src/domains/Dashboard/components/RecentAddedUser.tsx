import { IoIosArrowForward } from "react-icons/io";

interface User {
  name: string;
  address: string;
  date: string;
  time: string;
}

const RecentAddedUser: React.FC = () => {
  // Function to get initials from a name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const users: User[] = [
    {
      name: "John Doe",
      address: "123 Main St, Springfield",
      date: "11 Aug",
      time: "3:32 AM",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St, Shelbyville",
      date: "10 Aug",
      time: "2:15 PM",
    },
    {
      name: "Bob Johnson",
      address: "789 Oak Rd, Capital City",
      date: "9 Aug",
      time: "11:45 AM",
    },
  ];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-md font-semibold text-gray-800 mb-1">
          Recent Added Users
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Users who joined antoiler app this month
        </p>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {getInitials(user.name)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {user.address}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-sm font-medium text-gray-900">{user.date}</p>
                <p className="text-xs text-gray-500">{user.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center">
          <p className="text-sm tracking-wider text-[#151518]">
            SEE ALL CUSTOMERS
          </p>
          <IoIosArrowForward style={{ color: "#151518" }} />
        </div>
      </div>
    </div>
  );
};

export default RecentAddedUser;
