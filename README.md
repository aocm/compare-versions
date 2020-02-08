# アプリなどのバージョンを比較する
[![Build Status](https://travis-ci.org/aocm/compare-versions.svg?branch=master)](https://travis-ci.org/aocm/compare-versions)


## 概要
"2.1.2"と"2.0.39"を比較するとき、メジャーバージョン、マイナーバージョン、パッチバージョンの順に数字を比較するプログラム

## 仕様
* 同じ桁同士で判定が可能。桁が違う場合はエラーを返却する。
* 上から順に比較し、同じ桁の中で大きい数字のある方を新しいバージョンとする。


This software is released under the MIT License, see LICENSE.txt.