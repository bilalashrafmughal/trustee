import React, { useState } from "react";
import {
  useGetAccountsQuery,
  useDeleteAccountMutation,
} from "../../store/userAccountSlice";
import AccountCard from "@/shared-components/AccountCard";

const AccountList = () => {
  const { data: accounts, isLoading, error, refetch } = useGetAccountsQuery();
  const [deleteAccount, { isLoading: isDeleting }] = useDeleteAccountMutation();
  const [deletingId, setDeletingId] = useState(null);
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async (id) => {
    setDeleteError(null);
    setDeletingId(id);
    try {
      await deleteAccount(id).unwrap();
    } catch (err) {
      setDeleteError("Failed to delete account");
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">Error loading accounts</p>
        <button
          onClick={refetch}
          className="px-4 py-2 w-20 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!accounts || accounts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No accounts found</p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {accounts.map((account) => (
              <tr key={account.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                  #{account.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                  {account.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-left">
                  {account.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
                  {new Date(account.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  <button
                    onClick={() => handleDelete(account.id)}
                    disabled={isDeleting && deletingId === account.id}
                    className="px-3 py-1 w-20 text-xs bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    {isDeleting && deletingId === account.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                  {deleteError && deletingId === account.id && (
                    <p className="text-xs text-red-600 mt-2">{deleteError}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </>
  );
};

export default AccountList;
