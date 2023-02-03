import { apiPost, apiGet } from '../utils/axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const register = async (formdata) => {
    try {
      const registerData = {
        name: formdata.name,
        email: formdata.email,
        phone: formdata.phone,
        password: formdata.password,
      };
      await apiPost('/api/user/create', registerData).then((res) => {
        toast.success(res.data.Message);
        // localStorage.setItem("signature", res.data.signature)
      });
      navigate('/login');
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  const login = async (formdata) => {
    try {
      const loginData = {
        email: formdata.email,
        password: formdata.password,
      };
      await apiPost('/api/user/login', loginData).then((res) => {
        toast.success(res.data.Message);
        localStorage.setItem('signature', res.data.signature);
        localStorage.setItem('user', res.data.username);
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /*========================  DISPLAY ALL PLANS  ===================*/

  const DisplayPlans = async () => {
    try {
      await apiGet(`/api/plan/get`).then((res) => {
        setPlans([...res.data.getPlans]);
      });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /*========================  DISPLAY SINGLE PLAN  ===================*/

  const DisplayPlan = async (id) => {
    try {
      await apiGet(`/api/plan/get-plan/${id}`).then((res) => {
        localStorage.setItem('id', res.data.getPlan._id);
        localStorage.setItem('price', res.data.getPlan.planPrice);
        localStorage.setItem('health plan', res.data.getPlan.plan_type);
      });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  return (
    <DataContext.Provider
      value={{ register, login, DisplayPlans, plans, DisplayPlan }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error('UseAuth must be used within the auth provider');
  }
  return context;
};

export default DataProvider;
