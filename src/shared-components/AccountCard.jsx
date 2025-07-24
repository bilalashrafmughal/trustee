import React, { useState } from "react";
import { useDeleteAccountMutation } from "@/store/userAccountSlice";

const AccountCard = ({ account }) => {
  const [deleteAccount, { isLoading }] = useDeleteAccountMutation();
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setError(null);
    try {
      await deleteAccount(account.id).unwrap();
    } catch (err) {
      setError("Failed to delete account");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {account.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 text-lg">
              {account.name}
            </h3>
            <p className="text-gray-600 text-sm">{account.email}</p>
          </div>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm text-gray-500">
          <span className="font-medium">ID:</span> #{account.id}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-medium">Created:</span>{" "}
          {new Date(account.createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="px-3 py-1 w-20 text-xs bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
      {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default AccountCard;
