# coding:utf8
import json
import urllib
import requests
import base64

import sys


def post(url, data):
    req = requests.post(url, data)
    # data = urllib.urlencode(data)
    # opener = requests.build_opener(requests.HTTPCookieProcessor())
    # response = opener.open(req, data)
    return req.text


def get_login_code():
    url = "http://47.100.24.146:8003/api/user/send_login_code"
    data = {
        'mobile': '15666698065',
        'device_id': 'asdadasdasda'
    }
    print(post(url, data))



def user_login():
    url = "http://47.100.24.146:8003/api/user/user_login"
    data = {
        'mobile': '15666698065',
        'device_id': 'asdadasdasda',
        'code': '2765'
    }
    print(post(url, data))



def get_car():
    url = "http://47.100.24.146:8003/api/car/get_car"
    data = {
        'page': 2,
        'pageSize': 2
    }
    # print type(post(url, data))

    print(post(url, data))


def insert_car():
    url = "http://47.100.24.146:8000/carinfo/insertCarInfoByUserId"
    data = {
        'userid': 1,
        'car_no': 'jingA 00JSW2',
        'car_img': 'you base64',
        'car_back': 'you base64',
        'car_leftFront': 'you base64',
        'car_leftBack': 'you base64',
        'car_inner': 'you base64',
        'origin_price': 600
    }
    print(post(url, data))
    print(type(post(url, data)))


if __name__ == '__main__':
    # get_login_code()#请求注册验证码

    user_login()  # 获取用户信息

    get_car()