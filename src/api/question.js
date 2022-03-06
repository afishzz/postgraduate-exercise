import request, { URL_PREFIX } from './common/request';

const BASE_URL = `${URL_PREFIX}/ques`;

// 获取随机题目
export function getRandomQuestions() {
	return request(`${BASE_URL}/getRandom`, {
		method: 'GET'
	})
}
// 获取错题重练的题目
export function getWrongQuestions(data) {
	return request(`${BASE_URL}/getWrong`, {
		method: 'POST',
		data
	})
}

// 获取章节题目
export function getChapterQuestions(params) {
	return request(`${BASE_URL}/getChapter`, {
		method: 'GET',
		params
	})
}

// 获取一套模拟题
export function getSimulation() {
	return request(`${BASE_URL}/getSimulation`, {
		method: 'GET'
	})
}

//获取收藏的题目
export function getCollected(data) {
	return request(`${BASE_URL}/getCollected`, {
		method: 'POST',
		data
	})
}

//获取某科目下的所有章节名 
export function getChapterNames(params) {
	return request(`${BASE_URL}/getChapterNames`, {
		method: 'GET',
		params
	})
}

// 获取某题目内容
export function getOneQuestion(data) {
	return request(`${BASE_URL}/getOneQuestion`, {
		method: 'POST',
		data
	})
}

//新增一道题目
export function createOneQuestion(data) {
	return request(`${BASE_URL}/createOneQuestion`, {
		method: 'POST',
		data
	})
}
