function toggleSelected(event) {
	const ans = event.currentTarget;
	const question = ans.parentElement;
	const rightAnswers = question.querySelectorAll('.'+CORRECT_CLASS).length;
	const alreadyAnswered = (question.classList.contains(KO_CLASS)) || (rightAnswers >= question.total);
	if (!alreadyAnswered) {
		const classe = ans.correct ? CORRECT_CLASS : WRONG_CLASS;
		ans.classList.add(classe);
		if (!ans.correct) {
			question.classList.add(KO_CLASS);
			result.answered++;
			const answers = question.querySelectorAll('.answer');
			for (const ans of answers) {
				if (ans.correct) {
					ans.classList.add(CORRECT_CLASS);
				}
			}
		} else if ((rightAnswers + 1) == question.total) {
			question.classList.add(OK_CLASS);
			result.answered++;
			result.passed++;
		}
	}
}

function revealAnswer(event) {
	const question = event.currentTarget.parentElement;
	if (!question.classList.contains(KO_CLASS) && !question.classList.contains(OK_CLASS)) {
		question.classList.add(KO_CLASS);
		result.skipped++;
		const answers = question.querySelectorAll('.answer');
		for (const ans of answers) {
			if (ans.correct) {
				ans.classList.add(REVEALED_CLASS);
			}
		}
	}
}

const CODE_PLACEHOLDER = '##code##';

function createTextElement(textData, codeList) {
	const textElement = document.createElement('div');
	textElement.classList.add('text');

	const codeLength = codeList.length;
	let codeIndex = 0;
	const textRows = textData.split('\n');
	let lastBr;
	for (const row of textRows) {
		const rowElements = row.split(CODE_PLACEHOLDER);
		const codeInRow = rowElements.length - 1;
		let currentCodeInRow = 0;
		for (const rowElem of rowElements) {
			textElement.appendChild(document.createTextNode(rowElem));
			if (codeIndex < codeLength && currentCodeInRow < codeInRow) {
				const codeElem = document.createElement('code');
				codeElem.appendChild(document.createTextNode(codeList[codeIndex++]));
				textElement.appendChild(codeElem);
				currentCodeInRow++;
			}
		}
		lastBr = document.createElement('br');
		textElement.appendChild(lastBr);
	}
	textElement.removeChild(lastBr);

	return textElement;
}

class Answer {
	/**
	 * @param {string} text
	 * @param {boolean} correct
	 * @param {Array<string>} codeList
	 */
	constructor(text, correct = false, ...codeList) {
		this.text = text;
		this.correct = correct;
		this.code = codeList ?? [];
	}

	createElement(index) {
		const ans = document.createElement('div');
		ans.classList.add('answer');
		ans.correct = this.correct;
		ans.addEventListener('click', toggleSelected);

		const ansIndex = document.createElement('div');
		ansIndex.classList.add('index');
		ansIndex.appendChild(document.createTextNode(letters[index]));
		ans.appendChild(ansIndex);

		const textElement = createTextElement(this.text, this.code);

		ans.appendChild(textElement);

		return ans;
	}
}

class Question {
	/**
	 * @param {string} name
	 * @param {number} total
	 * @param {Array<string>} codeList
	 */
	constructor(name, total = 1, ...codeList) {
		this.name = name;
		this.total = total;
		this.code = codeList ?? [];
		/** @type {Array<Answer>} */
		this.answers = [];
	}

	createElement(index) {
		const quest = document.createElement('div');
		quest.classList.add('question');
		quest.total = this.total;

		const questName = document.createElement('div');
		questName.classList.add('question-name');
		questName.addEventListener('click', revealAnswer);
		questName.title = 'Reveal the correct answer';
		quest.appendChild(questName);

		const questNameIndex = document.createElement('div');
		questNameIndex.classList.add('index');
		questNameIndex.appendChild(document.createTextNode(index));
		questName.appendChild(questNameIndex);

		const textElement = createTextElement(this.name, this.code);

		if (this.total > 1) {
			textElement.appendChild(document.createElement('br'));
			textElement.appendChild(document.createTextNode(`Choose ${this.total} answers:`));
		}
		questName.appendChild(textElement);

		const answersList = [...this.answers];
		let answerIndex = 1;
		while (answersList.length > 0) {
			const i = Math.floor(Math.random() * answersList.length);
			const ans = answersList.splice(i, 1)[0];
			quest.appendChild(ans.createElement(answerIndex++));
		}

		return quest;
	}
}