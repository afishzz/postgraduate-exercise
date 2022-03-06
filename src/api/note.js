import request, { URL_PREFIX } from './common/request';

const BASE_URL = `${URL_PREFIX}/note`;

// 为某题添加或更新笔记
export function addNote(data) {
	return request(`${BASE_URL}/addNote`, {
		method: 'POST',
		data
	})
}

//获取用户某科目下的所有笔记
export function getSubjectNotes(data) {
	return request(`${BASE_URL}/getSubjectNotes`, {
		method: 'POST',
		data
	});
}

// 获取用户的笔记
export function getNote(data) {
	return request(`${BASE_URL}/getNote`, {
		method: 'POST',
		data
	})
}

//删除用户的笔记
export function deleteNote(data) {
	return request(`${BASE_URL}/deleteNote`, {
		method: 'POST',
		data
	})
}
