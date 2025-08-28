import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the end of banner panel
pattern = r'panel-banner.*?</div>\s*</div>\s*</div>'
match = re.search(pattern, content, re.DOTALL)

if match:
    insert_pos = match.end()
    print(f'Found insertion point at position: {insert_pos}')
    
    # Create the configuration panel HTML
    config_panel = '''
                <!-- CONFIGURATION PANEL -->
                <div id="panel-config" class="tab-panel hidden space-y-4">
                    <!-- API CONFIGURATION -->
                    <details class="control-group" open>
                        <summary><span>Configuration API</span><label class="completion-label"><input type="checkbox" id="completion-config-api" class="completion-checkbox"><span>Fait ✅</span></label></summary>
                        <div class="control-group-content space-y-4">
                            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <h4 class="font-medium text-blue-800 mb-3">Fournisseur d'IA</h4>
                                <div class="grid grid-cols-2 gap-3">
                                    <label class="flex items-center gap-2">
                                        <input type="radio" name="ai-provider" value="gemini" class="cv-input" checked>
                                        <span class="text-sm">Google Gemini</span>
                                    </label>
                                    <label class="flex items-center gap-2">
                                        <input type="radio" name="ai-provider" value="chatgpt" class="cv-input">
                                        <span class="text-sm">ChatGPT</span>
                                    </label>
                                </div>
                            </div>

                            <div id="gemini-config" class="space-y-3">
                                <h4 class="font-medium text-gray-700">Configuration Gemini</h4>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Clé API Gemini</label>
                                    <div class="flex gap-2">
                                        <input type="password" id="gemini-api-key" placeholder="Votre clé API Gemini" class="cv-input flex-1 p-2 border rounded-md">
                                        <button id="test-gemini-api" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" data-tooltip="Tester la connexion à l'API Gemini">
                                            <i class="fas fa-plug"></i>
                                        </button>
                                    </div>
                                    <p class="text-xs text-gray-500 mt-1">Obtenez votre clé sur <a href="https://makersuite.google.com/app/apikey" target="_blank" class="text-blue-600 hover:underline">Google AI Studio</a></p>
                                </div>
                            </div>

                            <div id="chatgpt-config" class="space-y-3 hidden">
                                <h4 class="font-medium text-gray-700">Configuration ChatGPT</h4>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Clé API OpenAI</label>
                                    <div class="flex gap-2">
                                        <input type="password" id="chatgpt-api-key" placeholder="Votre clé API OpenAI" class="cv-input flex-1 p-2 border rounded-md">
                                        <button id="test-chatgpt-api" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" data-tooltip="Tester la connexion à l'API ChatGPT">
                                            <i class="fas fa-plug"></i>
                                        </button>
                                    </div>
                                    <p class="text-xs text-gray-500 mt-1">Obtenez votre clé sur <a href="https://platform.openai.com/api-keys" target="_blank" class="text-blue-600 hover:underline">OpenAI Platform</a></p>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Modèle</label>
                                    <select id="chatgpt-model" class="cv-input w-full p-2 border rounded-md">
                                        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                                        <option value="gpt-4">GPT-4</option>
                                        <option value="gpt-4-turbo">GPT-4 Turbo</option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex gap-2">
                                <button id="save-api-config" class="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600" data-tooltip="Sauvegarder la configuration API">
                                    <i class="fas fa-save mr-2"></i> Sauvegarder
                                </button>
                                <button id="load-api-config" class="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" data-tooltip="Charger la configuration API">
                                    <i class="fas fa-folder-open mr-2"></i> Charger
                                </button>
                            </div>
                        </div>
                    </details>

                    <!-- SAVE/LOAD SYSTEM -->
                    <details class="control-group" open>
                        <summary><span>Sauvegarde & Chargement</span><label class="completion-label"><input type="checkbox" id="completion-config-save" class="completion-checkbox"><span>Fait ✅</span></label></summary>
                        <div class="control-group-content space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <button id="quick-save-cv" class="bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 flex items-center justify-center gap-2" data-tooltip="Sauvegarder rapidement le CV actuel">
                                    <i class="fas fa-save"></i> Sauvegarde Rapide
                                </button>
                                <button id="load-saved-cv" class="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2" data-tooltip="Charger un CV sauvegardé">
                                    <i class="fas fa-folder-open"></i> Charger CV
                                </button>
                            </div>

                            <div class="border-t pt-4">
                                <h4 class="font-medium text-gray-700 mb-3">Sauvegardes Automatiques</h4>
                                <div class="space-y-3">
                                    <label class="flex items-center gap-2">
                                        <input type="checkbox" id="auto-save-enabled" class="cv-input" checked>
                                        <span class="text-sm">Activer la sauvegarde automatique</span>
                                    </label>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Intervalle (minutes)</label>
                                        <input type="range" id="auto-save-interval" min="1" max="30" value="5" class="cv-input w-full">
                                        <div class="flex justify-between text-xs text-gray-500">
                                            <span>1 min</span>
                                            <span id="auto-save-interval-value" class="font-medium">5 min</span>
                                            <span>30 min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-t pt-4">
                                <h4 class="font-medium text-gray-700 mb-3">Historique des Sauvegardes</h4>
                                <div id="save-history-list" class="space-y-2 max-h-40 overflow-y-auto">
                                    <div class="text-sm text-gray-500 text-center py-4">Aucune sauvegarde trouvée</div>
                                </div>
                                <button id="clear-save-history" class="w-full mt-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 text-sm" data-tooltip="Supprimer tout l'historique des sauvegardes">
                                    <i class="fas fa-trash mr-2"></i> Vider l'historique
                                </button>
                            </div>
                        </div>
                    </details>

                    <!-- TEMPLATE MANAGEMENT -->
                    <details class="control-group" open>
                        <summary><span>Gestion des Modèles</span><label class="completion-label"><input type="checkbox" id="completion-config-templates" class="completion-checkbox"><span>Fait ✅</span></label></summary>
                        <div class="control-group-content space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <button id="save-as-template" class="bg-purple-500 text-white py-3 px-4 rounded-md hover:bg-purple-600 flex items-center justify-center gap-2" data-tooltip="Sauvegarder la configuration actuelle comme modèle">
                                    <i class="fas fa-bookmark"></i> Sauvegarder Modèle
                                </button>
                                <button id="load-template" class="bg-indigo-500 text-white py-3 px-4 rounded-md hover:bg-indigo-600 flex items-center justify-center gap-2" data-tooltip="Charger un modèle existant">
                                    <i class="fas fa-book-open"></i> Charger Modèle
                                </button>
                            </div>

                            <div class="border-t pt-4">
                                <h4 class="font-medium text-gray-700 mb-3">Modèles Disponibles</h4>
                                <div id="templates-list" class="space-y-2 max-h-60 overflow-y-auto">
                                    <div class="text-sm text-gray-500 text-center py-4">Aucun modèle trouvé</div>
                                </div>
                            </div>

                            <div class="border-t pt-4">
                                <h4 class="font-medium text-gray-700 mb-3">Modèles Prédéfinis</h4>
                                <div class="grid grid-cols-2 gap-2">
                                    <button class="template-preset bg-gray-100 hover:bg-gray-200 p-3 rounded-md text-sm" data-template="modern" data-tooltip="Modèle moderne et épuré">
                                        <i class="fas fa-palette mr-2"></i> Moderne
                                    </button>
                                    <button class="template-preset bg-gray-100 hover:bg-gray-200 p-3 rounded-md text-sm" data-template="classic" data-tooltip="Modèle classique traditionnel">
                                        <i class="fas fa-landmark mr-2"></i> Classique
                                    </button>
                                    <button class="template-preset bg-gray-100 hover:bg-gray-200 p-3 rounded-md text-sm" data-template="creative" data-tooltip="Modèle créatif et original">
                                        <i class="fas fa-lightbulb mr-2"></i> Créatif
                                    </button>
                                    <button class="template-preset bg-gray-100 hover:bg-gray-200 p-3 rounded-md text-sm" data-template="minimal" data-tooltip="Modèle minimaliste">
                                        <i class="fas fa-minus mr-2"></i> Minimal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </details>

                    <!-- SYSTEM INFORMATION -->
                    <details class="control-group">
                        <summary><span>Informations Système</span></summary>
                        <div class="control-group-content space-y-4">
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-medium text-gray-700 mb-3">Statistiques d'utilisation</h4>
                                <div class="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span class="text-gray-600">CV créés:</span>
                                        <span id="cv-count" class="font-medium">0</span>
                                    </div>
                                    <div>
                                        <span class="text-gray-600">Modèles sauvegardés:</span>
                                        <span id="templates-count" class="font-medium">0</span>
                                    </div>
                                    <div>
                                        <span class="text-gray-600">Appels IA:</span>
                                        <span id="ai-calls-count" class="font-medium">0</span>
                                    </div>
                                    <div>
                                        <span class="text-gray-600">PDF générés:</span>
                                        <span id="pdf-count" class="font-medium">0</span>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-medium text-gray-700 mb-3">Version & Support</h4>
                                <div class="space-y-2 text-sm">
                                    <div><span class="text-gray-600">Version:</span> <span class="font-medium">1.0.0</span></div>
                                    <div><span class="text-gray-600">Dernière mise à jour:</span> <span class="font-medium">28 août 2025</span></div>
                                    <div class="flex gap-2">
                                        <button id="check-updates" class="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600" data-tooltip="Vérifier les mises à jour">
                                            <i class="fas fa-sync mr-1"></i> Vérifier
                                        </button>
                                        <button id="report-issue" class="bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600" data-tooltip="Signaler un problème">
                                            <i class="fas fa-bug mr-1"></i> Signaler
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
'''
    
    # Insert the configuration panel
    new_content = content[:insert_pos] + config_panel + content[insert_pos:]
    
    # Write back to file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print('Configuration panel inserted successfully!')
else:
    print('Could not find the insertion point')
