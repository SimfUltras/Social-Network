import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fad397be-0bfb-4c0c-9c02-238cdf422a8f'
    }
});//axios instance  - вспомогательная функция axios

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`) //требование об авторизации
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}
export const authAPI = {
    me () {
     return instance.get(`auth/me`)
    }
}



