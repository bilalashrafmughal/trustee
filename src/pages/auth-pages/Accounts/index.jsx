import React, { useState } from "react";
import Layout from "@/layout";
import { HiPlus } from "react-icons/hi2";
import CreateAccountDialog from "@/components/ProjectHistory/CreateAccountDialog";
import AccountList from "@/components/Accounts/AccountList";

const Accounts = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 flex items-center">
          <div className="flex items-left flex-1">
            <div className="text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Accounts
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Welcome back! Here you can manage your accounts and view the
                latest updates.
              </p>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            onClick={() => setIsCreateDialogOpen(true)}
            className="inline-flex items-center h-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <HiPlus className="w-5 h-5 mr-2" />
            Create Account
          </button>
        </div>

        {/* Accounts List Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl text-left font-semibold text-gray-900 mb-6">
            Accounts List
          </h2>
          <AccountList />
        </div>
      </div>

      <CreateAccountDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onSuccess={() => {
          // The AccountList component will automatically refetch data
          console.log("Account created successfully");
        }}
      />
    </Layout>
  );
};

export default Accounts;
