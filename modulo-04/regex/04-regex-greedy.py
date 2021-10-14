import re

texto = """
<p>Frase 1</p> <p>Eita</p> <p>Qualquer frase</p> <div>1</div> 
"""

# Metacaracteres greedy (Gulosos): ^ $ ( )
# Meta caracteres:
# * 0 ou n
# + 1 ou n
# ? 0 ou 1
# localiza as tags < > q podem ter de 1 a 3 leltras
print(re.findall(r"<[pdiv]{1,3}>", texto))
# abre tag p/ pegar conteúdo das tags c/ tags:
# .* (dot all . qualquer coisa * n vezes)
print(re.findall(r"<[pdiv]{1,3}>.*", texto))
# \/ fecha tag "/" usar barra na frente.
print(re.findall(r"<[pdiv]{1,3}>.*<\/[pdiv]{1,3}>", texto))
# pegar apenas conteúdo das tags:
