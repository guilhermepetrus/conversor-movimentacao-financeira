const fs = require('fs/promises');
const path = require('path');

const sourceFilePath = path.join(__dirname, 'entrada');
const destinyFilePath = path.join(__dirname, 'saida');

// Garantir que a pasta de saída existe
async function ensureOutputDirectory() {
    await fs.mkdir(destinyFilePath, { recursive: true });
}

// Formatar o conteúdo dos arquivos
function formatContent(content) {
    return content
        .split('\n')
        .map(element => element.trim())
        .filter(element => element.length)
        .map(element => element.toUpperCase());
}

// Criar novo arquivo com conteúdo formatado
async function createNewFile(filename) {
    const inputFilePath = path.join(sourceFilePath, filename);
    const content = await fs.readFile(inputFilePath, 'utf8');
    const formattedContent = formatContent(content);
    const outputFilename = `${path.parse(filename).name}_tratado.txt`;
    const outputFilePath = path.join(destinyFilePath, outputFilename);

    await fs.writeFile(outputFilePath, formattedContent.join('\n'));
    console.log(`Arquivo processado: ${filename}`);
    console.log(`Arquivo salvo em: ${outputFilePath}\n`);
}

async function main() {
    try {
        await ensureOutputDirectory();

        const inputFiles = (await fs.readdir(sourceFilePath))
            .filter(file => file.endsWith('.txt'));

        for (const filename of inputFiles) { 
            await createNewFile(filename);
        }

    } catch (err) {
        console.error('Erro ao processar arquivos:', err.message);
    } finally {
        console.log('Operação finalizada!');
    }
}

main();