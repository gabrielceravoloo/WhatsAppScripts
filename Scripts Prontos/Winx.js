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

Sei que você vai querer ser uma de nós!

Winx
Quando damos nossas mãos
Nos tornamos poderosas
Porque juntas somos invencíveis

Winx
É tão bom poder sorrir
E o mundo iluminar
Venha se juntar à nós voando

Sei que você vai querer ser uma de nós!

Com o nosso raio o céu incendeia
Dando início a uma aventura estelar
E numa nuvem a mente vagueia
Colore a minha vida, com tudo o que imagino
Vou voar bem alto

Winx
Quando damos nossas mãos
Nos tornamos poderosas
Porque juntas somos invencíveis

Winx
Novidade igual não há
Companheiras pra valer
Venha se juntar à nós voando

Winx
Fantásticas Winx
Elas podem voar
O raio mais poderoso, tem a marca das Winx!

`).then(e => console.log(`mensagens enviadas: ${e}`)).catch(console.error)
