from django.http import JsonResponse
from math import gcd
from functools import reduce

def lcm(a, b):
    return abs(a*b) // gcd(a, b)

def lcm_range(x, y):
    return reduce(lcm, range(x, y + 1))

def menor_numero_divisivel(request, x, y):
    if x > 0 and y > 0 and x < y:
        resultado = lcm_range(x, y)
        return JsonResponse({'resultado': resultado})
    return JsonResponse({'error': 'Valores inválidos'}, status=400)