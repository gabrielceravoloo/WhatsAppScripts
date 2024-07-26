async function scriptENVIAR(scriptText) 
{
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if (!textarea) throw new Error("Não há uma conversa aberta, porfavor deixar aberta na conversa desejada!")

	for (const line of lines) 
	{
		console.log(line)
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', { bubbles: true }));
		setTimeout(() => { (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click(); }, 100);
		if (lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

scriptENVIAR(`

A história começou
Quando um relógio esquisito
Grudou no pulso dele vindo lá do infinito
Agora tem poderes e com eles faz bonito
É o Ben 10

Se acaso encontrá-lo, você vai se admirar
Diante de seus olhos ele vai se transformar
Em um ser alienígena
Que bota pra quebrar
É o Ben 10

Com seus poderes vai combater
Os inimigos e vai vencer
Ele não foge de medo ou dor
Moleque muito irado
Seja onde for
É o Ben 10

`).then(e => console.log(`mensagens enviadas: ${e}`)).catch(console.error)
