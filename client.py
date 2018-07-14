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
        'mobile': '13551916138',
        'device_id': 'aaaa'
    }
    print(post(url, data))


def user_login():
    url = "http://47.100.24.146:8003/api/user/user_login"
    data = {
        'mobile': '13551916138',
        'device_id': 'aaaa',
        'code': '5746'
    }
    print(post(url, data))


def get_car():
    url = "http://47.100.24.146:8003/api/car/get_car"
    url = "http://localhost:8000/api/car/get_car"

    data = {
        'page': 1,
        'pageSize': 2
    }
    # print type(post(url, data))

    print(post(url, data))


def get_car_by_id():
    url = "http://localhost:8000/api/car/get_by_id"
    url = "http://47.100.24.146:8003/api/car/get_by_id"
    data = {
        'car_id': 6
    }
    print(post(url, data))
    # print(type(post(url, data)))


def generate_order():
    url = "http://47.100.24.146:8003/api/order/generate"
    url = "http://localhost:8000/api/order/generate"
    data = {

        'car_id': 6,
        'user_id': 9,
        'mobile': '15666698065',
        'start_time': '2018-07-07',
        'end_time': '2018-07-10',
        'order_price': 0.01,
        'discount_price': 0.002,
        'location': '北京市海淀区上地东路',
        'memo': '这是备注内容',
        'token': 'xxx',
        'sig': 'xxx'
    }
    # print type(post(url, data))

    print(post(url, data))


def ins_pre_car():
    url = "http://47.100.24.146:8003/api/car/ins_pre_car"
    # url = "http://localhost:8000/api/car/ins_pre_car"
    data = {
        'name': 'sdadaad',
        'mobile': '15666698065',
        'car_brand': 'sss',
        'car_no': 'sxxx',
        'memo': '这是备注内容'
    }
    print(post(url, data))


def get_car_by_userid():
    url = "http://47.100.24.146:8003/api/car/get_by_userid"
    # url = "http://localhost:8000/api/car/get_by_userid"
    data = {

        'user_id': '9'
    }
    print(post(url, data))


def get_order_by_userid():
    url = "http://47.100.24.146:8003/api/order/get_by_userid"
    # url = "http://localhost:8000/api/order/get_by_userid"
    data = {

        'user_id': '9'
    }
    print(post(url, data))


if __name__ == '__main__':
    # get_login_code()#请求注册验证码

    # user_login()  # 获取用户信息

    # get_car()
    # generate_order()
    # get_car_by_id()
    # ins_pre_car()
    get_car_by_userid()
    # get_order_by_userid()