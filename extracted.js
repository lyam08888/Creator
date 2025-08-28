
        // This script is now self-contained and does not use Firebase for saving.
        
        document.addEventListener('DOMContentLoaded', function() {
            // --- GLOBAL SELECTORS (STATIC) ---
            const controls = {
                aiInput: document.getElementById('ai-input'), analyzeBtn: document.getElementById('analyze-btn'), loader: document.getElementById('loader-overlay'), loaderText: document.getElementById('loader-text'),
                nom: document.getElementById('nom'), prenom: document.getElementById('prenom'), poste: document.getElementById('poste'),
                description: document.getElementById('description'), competences: document.getElementById('competences'), aiSynthesizeSkillsBtn: document.getElementById('ai-synthesize-skills-btn'),
                experienceList: document.getElementById('experience-list'), addExperienceBtn: document.getElementById('add-experience'),
                formationList: document.getElementById('formation-list'), addFormationBtn: document.getElementById('add-formation'),
                toggleBanner: document.getElementById('toggle-banner-checkbox'), bannerNom: document.getElementById('banner-nom'), bannerPoste: document.getElementById('banner-poste'), bannerEmail: document.getElementById('banner-email'), bannerTel: document.getElementById('banner-tel'), bannerImage: document.getElementById('banner-image'),
                bannerStyleSelect: document.getElementById('banner-style-select'), bannerInvertBtn: document.getElementById('banner-invert-btn'),
                fixBannerTopBtn: document.getElementById('fix-banner-top-btn'), fixBannerBottomBtn: document.getElementById('fix-banner-bottom-btn'), modularBannerBtn: document.getElementById('modular-banner-btn'),
                qualificationDispo: document.getElementById('qualification-dispo'), qualificationSalaire: document.getElementById('qualification-salaire'), qualificationLoc: document.getElementById('qualification-loc'),
                generateMailBtn: document.getElementById('generate-mail-btn'), recruiterMailContent: document.getElementById('recruiter-mail-content'),
                anonymizeBtn: document.getElementById('anonymize-btn'), downloadPdfBtn: document.getElementById('download-pdf-btn'),
                resetCvBtn: document.getElementById('reset-cv-btn'),
                togglePresentationModeBtn: document.getElementById('toggle-presentation-mode-btn'),
                toggleOverflowBtn: document.getElementById('toggle-overflow-btn'),
                aiSummarizeBtn: document.getElementById('ai-summarize-btn'),
                resetRecruiterBtn: document.getElementById('reset-recruiter-btn'),
                aiLimitSkillsBtn: document.getElementById('ai-limit-skills-btn'),
                pageMargin: document.getElementById('page-margin'), pageMarginValue: document.getElementById('page-margin-value'),
                moduleSpacing: document.getElementById('module-spacing'), moduleSpacingValue: document.getElementById('module-spacing-value'),
                itemSpacing: document.getElementById('item-spacing'), itemSpacingValue: document.getElementById('item-spacing-value'),
                fontSizeH1: document.getElementById('font-size-h1'), fontSizeH1Value: document.getElementById('font-size-h1-value'),
                fontSizeH2: document.getElementById('font-size-h2'), fontSizeH2Value: document.getElementById('font-size-h2-value'),
                fontSizeP: document.getElementById('font-size-p'), fontSizePValue: document.getElementById('font-size-p-value'),
                fontSizeBanner: document.getElementById('font-size-banner'), fontSizeBannerValue: document.getElementById('font-size-banner-value'),
                bannerElementSpacing: document.getElementById('banner-element-spacing'), bannerElementSpacingValue: document.getElementById('banner-element-spacing-value'),
                lineHeight: document.getElementById('line-height'), lineHeightValue: document.getElementById('line-height-value'),
                paragraphSpacing: document.getElementById('paragraph-spacing'), paragraphSpacingValue: document.getElementById('paragraph-spacing-value'),
                randomizeBannerStyleBtn: document.getElementById('randomize-banner-style-btn'),
                bannerNomFont: document.getElementById('banner-nom-font'), bannerNomSize: document.getElementById('banner-nom-size'), bannerNomSizeValue: document.getElementById('banner-nom-size-value'), bannerNomColor: document.getElementById('banner-nom-color'), bannerNomBold: document.getElementById('banner-nom-bold'), bannerNomItalic: document.getElementById('banner-nom-italic'),
                bannerPosteSize: document.getElementById('banner-poste-size'), bannerPosteSizeValue: document.getElementById('banner-poste-size-value'), bannerPosteColor: document.getElementById('banner-poste-color'), bannerPosteBold: document.getElementById('banner-poste-bold'), bannerPosteItalic: document.getElementById('banner-poste-italic'),
                bannerContactSize: document.getElementById('banner-contact-size'), bannerContactSizeValue: document.getElementById('banner-contact-size-value'), bannerContactColor: document.getElementById('banner-contact-color'), bannerContactBold: document.getElementById('banner-contact-bold'), bannerContactItalic: document.getElementById('banner-contact-italic'),
                undoBtn: document.getElementById('undo-btn'), redoBtn: document.getElementById('redo-btn'),
                addSectionBtn: document.getElementById('add-section-btn'), customSectionsList: document.getElementById('custom-sections-list'), sectionSuggestionSelect: document.getElementById('section-suggestion-select'), newSectionTitleInput: document.getElementById('new-section-title-input'),
                primaryColorPicker: document.getElementById('primary-color-picker'),
                secondaryColorPicker: document.getElementById('secondary-color-picker'),
                aiColorBtn: document.getElementById('ai-color-btn'),
                bodyTextColorPicker: document.getElementById('body-text-color-picker'),
                fontFamilyH1Select: document.getElementById('font-family-h1-select'),
                fontFamilyH2Select: document.getElementById('font-family-h2-select'),
                fontFamilyBodySelect: document.getElementById('font-family-body-select'),
                shareBtn: document.getElementById('share-btn'), shareModal: document.getElementById('share-modal'), closeShareModal: document.getElementById('close-share-modal'), shareLinkInput: document.getElementById('share-link-input'), copyShareLinkBtn: document.getElementById('copy-share-link-btn'),
                iconPickerModal: document.getElementById('icon-picker-modal'), closeIconPickerModal: document.getElementById('close-icon-picker-modal'), iconPickerGrid: document.getElementById('icon-picker-grid'), iconSearchInput: document.getElementById('icon-search-input'),
                addPageBtn: document.getElementById('add-page-btn'),
                bannerBgImage: document.getElementById('banner-bg-image'),
                bannerBgOpacity: document.getElementById('banner-bg-opacity'),
                bannerBgOpacityValue: document.getElementById('banner-bg-opacity-value'),
                bannerBgBlur: document.getElementById('banner-bg-blur'),
                bannerBgBlurValue: document.getElementById('banner-bg-blur-value'),
                bannerBgGrayscale: document.getElementById('banner-bg-grayscale'),
                removeBannerBgBtn: document.getElementById('remove-banner-bg-btn'),
                skillsTextControls: document.getElementById('skills-text-controls'),
                skillsLevelControls: document.getElementById('skills-level-controls'),
                skillsLevelList: document.getElementById('skills-level-list'),
                addSkillLevelBtn: document.getElementById('add-skill-level-btn'),
                confirmModal: {
                    overlay: document.getElementById('confirm-modal'),
                    title: document.getElementById('confirm-modal-title'),
                    text: document.getElementById('confirm-modal-text'),
                    okBtn: document.getElementById('confirm-modal-ok-btn'),
                    cancelBtn: document.getElementById('confirm-modal-cancel-btn'),
                },

                // Éléments manquants pour les nouvelles fonctionnalités
                suggestColorsBtn: document.getElementById('suggest-colors'),
                languageList: document.getElementById('langue-list'),
                projectList: document.getElementById('projet-list'),
                certificationList: document.getElementById('certification-list'),
                referenceList: document.getElementById('reference-list'),
                socialList: document.getElementById('social-list'),
                profilePhotoPreview: document.getElementById('profile-photo-preview'),
                removeProfilePhoto: document.getElementById('remove-profile-photo'),
                textToAnalyze: document.getElementById('text-to-analyze'),
                aiRewriteProfile: document.getElementById('ai-rewrite-profile'),
                aiOptimizeProfile: document.getElementById('ai-optimize-profile'),
                aiCategorizeSkills: document.getElementById('ai-categorize-skills'),
                aiSuggestSkills: document.getElementById('ai-suggest-skills'),
                templatesModal: document.getElementById('templates-modal'),
                apiModal: document.getElementById('api-modal'),
                collapseAllSectionsBtn: document.getElementById('collapse-all-sections-btn'),
                accessibilityBtn: document.getElementById('accessibility-btn'),
                loadCvBtn: document.getElementById('load-cv-btn'),
                templatesBtn: document.getElementById('templates-btn'),
                shareBtn: document.getElementById('share-btn'),
                resetCvBtn: document.getElementById('reset-cv-btn'),
                toggleDarkMode: document.getElementById('toggle-dark-mode'),
                printCv: document.getElementById('print-cv'),

                // Advanced Layout Controls
                pageMarginSlider: document.getElementById('page-margin-slider'),
                pagePaddingSlider: document.getElementById('page-padding-slider'),
                moduleSpacingSlider: document.getElementById('module-spacing-slider'),
                paragraphSpacingSlider: document.getElementById('paragraph-spacing-slider'),
                fontSizeH1Slider: document.getElementById('font-size-h1-slider'),
                fontSizeH2Slider: document.getElementById('font-size-h2-slider'),
                resetLayoutBtn: document.getElementById('reset-layout-btn'),
                saveLayoutBtn: document.getElementById('save-layout-btn'),

                // Value displays
                pageMarginValue: document.getElementById('page-margin-value'),
                pagePaddingValue: document.getElementById('page-padding-value'),
                moduleSpacingValue: document.getElementById('module-spacing-value'),
                paragraphSpacingValue: document.getElementById('paragraph-spacing-value'),
                fontSizeH1Value: document.getElementById('font-size-h1-value'),
                fontSizeH2Value: document.getElementById('font-size-h2-value')
            };

            // --- DYNAMIC SELECTORS ---
            let preview = {};
            function reinitializePreviewSelectors() {
                preview.previewWrapper = document.getElementById('cv-preview-wrapper');
                preview.cvNomPrenom = document.getElementById('cv-nom-prenom-preview');
                preview.cvPoste = document.getElementById('cv-poste-preview');
                preview.cvDescription = document.getElementById('cv-description-preview');
                preview.cvFormation = document.getElementById('cv-formation-preview');
                preview.cvCompetences = document.getElementById('cv-competences-preview');
                preview.cvExperience = document.getElementById('cv-experience-preview');
                preview.bannerModule = document.getElementById('banner-module');
                preview.banner = document.getElementById('recruiter-banner');
                preview.bannerImg = document.getElementById('banner-img-preview');
                preview.bannerNom = document.getElementById('banner-nom-preview');
                preview.bannerPoste = document.getElementById('banner-poste-preview');
                preview.bannerContact = document.getElementById('banner-contact-preview');
                preview.bannerEmail = document.getElementById('banner-email-preview');
                preview.bannerTel = document.getElementById('banner-tel-preview');
                preview.qualificationModule = document.getElementById('qualification-module');
                preview.qualificationPreview = document.getElementById('qualification-preview');
                preview.fixedBannerTop = document.getElementById('fixed-banner-top');
                preview.fixedBannerBottom = document.getElementById('fixed-banner-bottom');
                preview.bannerBgImg = document.getElementById('banner-bg-img-preview');
            }
            
            // --- CONFIGURATION OBJECTS ---
            const sliders = {
                pageMargin: { el: controls.pageMargin, valueEl: controls.pageMarginValue, property: '--page-margin', unit: 'cm' },
                moduleSpacing: { el: controls.moduleSpacing, valueEl: controls.moduleSpacingValue, property: '--module-spacing', unit: 'rem' },
                itemSpacing: { el: controls.itemSpacing, valueEl: controls.itemSpacingValue, property: '--item-spacing', unit: 'rem' },
                fontSizeH1: { el: controls.fontSizeH1, valueEl: controls.fontSizeH1Value, property: '--font-size-h1', unit: 'pt' },
                fontSizeH2: { el: controls.fontSizeH2, valueEl: controls.fontSizeH2Value, property: '--font-size-h2', unit: 'pt' },
                fontSizeP: { el: controls.fontSizeP, valueEl: controls.fontSizePValue, property: '--font-size-p', unit: 'pt' },
                fontSizeBanner: { el: controls.fontSizeBanner, valueEl: controls.fontSizeBannerValue, property: '--font-size-banner', unit: 'pt' },
                lineHeight: { el: controls.lineHeight, valueEl: controls.lineHeightValue, property: '--line-height', unit: '' },
                paragraphSpacing: { el: controls.paragraphSpacing, valueEl: controls.paragraphSpacingValue, property: '--paragraph-spacing', unit: 'rem' },
                bannerElementSpacing: { el: controls.bannerElementSpacing, valueEl: controls.bannerElementSpacingValue, property: '--banner-element-spacing', unit: 'rem' },
            };

            const bannerStyleControls = {
                nomFont: { el: controls.bannerNomFont, event: 'change', stateKey: 'nomFont' },
                nomSize: { el: controls.bannerNomSize, event: 'input', valueEl: controls.bannerNomSizeValue, stateKey: 'nomSize' },
                nomColor: { el: controls.bannerNomColor, event: 'input', stateKey: 'nomColor' },
                nomBold: { el: controls.bannerNomBold, event: 'click', toggle: true, stateKey: 'nomBold' },
                nomItalic: { el: controls.bannerNomItalic, event: 'click', toggle: true, stateKey: 'nomItalic' },
                posteSize: { el: controls.bannerPosteSize, event: 'input', valueEl: controls.bannerPosteSizeValue, stateKey: 'posteSize' },
                posteColor: { el: controls.bannerPosteColor, event: 'input', stateKey: 'posteColor' },
                posteBold: { el: controls.bannerPosteBold, event: 'click', toggle: true, stateKey: 'posteBold' },
                posteItalic: { el: controls.bannerPosteItalic, event: 'click', toggle: true, stateKey: 'posteItalic' },
                contactSize: { el: controls.bannerContactSize, event: 'input', valueEl: controls.bannerContactSizeValue, stateKey: 'contactSize' },
                contactColor: { el: controls.bannerContactColor, event: 'input', stateKey: 'contactColor' },
                contactBold: { el: controls.bannerContactBold, event: 'click', toggle: true, stateKey: 'contactBold' },
                contactItalic: { el: controls.bannerContactItalic, event: 'click', toggle: true, stateKey: 'contactItalic' },
            };

            const themes = {
                professional: {
                    primaryColor: '#2563eb', secondaryColor: '#334155', bodyTextColor: '#334155',
                    fontH1: "'Montserrat', sans-serif", fontH2: "'Montserrat', sans-serif", fontBody: "'Lato', sans-serif"
                },
                creative: {
                    primaryColor: '#db2777', secondaryColor: '#4f46e5', bodyTextColor: '#44403c',
                    fontH1: "'Playfair Display', serif", fontH2: "'Oswald', sans-serif", fontBody: "'Nunito Sans', sans-serif"
                },
                modern: {
                    primaryColor: '#16a34a', secondaryColor: '#1f2937', bodyTextColor: '#374151',
                    fontH1: "'Oswald', sans-serif", fontH2: "'Source Sans Pro', sans-serif", fontBody: "'Source Sans Pro', sans-serif"
                }
            };
            
            // --- GLOBAL STATE VARIABLES ---
            let pageCounter = 1;
            let customSectionCounter = 0;
            const root = document.documentElement;
            let isAnonymized = false;
            let originalData = {};
            let isRestoringState = false; 
            let activeIconTarget = null;
            
            // --- UI UTILITIES ---
            function showLoader(text = "Chargement...") {
                controls.loaderText.textContent = text;
                controls.loader.classList.remove('hidden');
                controls.loader.classList.add('flex');
            }

            function hideLoader() {
                controls.loader.classList.add('hidden');
                controls.loader.classList.remove('flex');
            }

            function showNotification(message, type = 'success', duration = 3000) {
                const toast = document.createElement('div');
                const icon = type === 'error' ? 'fa-times-circle text-red-500' : 'fa-check-circle text-green-500';
                toast.className = 'toast';
                toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
                document.getElementById('notification').appendChild(toast);
                setTimeout(() => toast.classList.add('show'), 10);
                setTimeout(() => {
                    toast.classList.remove('show');
                    toast.addEventListener('transitionend', () => toast.remove());
                }, duration);
            }
            
            function showConfirmModal(title, text) {
                return new Promise((resolve) => {
                    controls.confirmModal.title.textContent = title;
                    controls.confirmModal.text.innerHTML = text;
                    controls.confirmModal.overlay.classList.add('active');

                    const cleanup = (result) => {
                        controls.confirmModal.overlay.classList.remove('active');
                        controls.confirmModal.okBtn.onclick = null;
                        controls.confirmModal.cancelBtn.onclick = null;
                        resolve(result);
                    };

                    controls.confirmModal.okBtn.onclick = () => cleanup(true);
                    controls.confirmModal.cancelBtn.onclick = () => cleanup(false);
                });
            }


            // --- HISTORY (UNDO/REDO) SYSTEM ---
            let history = [];
            let historyIndex = -1;
            const maxHistorySize = 50;

            function saveToHistory() {
                const currentState = {
                    cvData: getCurrentCvData(),
                    timestamp: Date.now()
                };

                // Remove any history after current index (when user made changes after undo)
                history = history.slice(0, historyIndex + 1);

                // Add new state
                history.push(currentState);
                historyIndex++;

                // Limit history size
                if (history.length > maxHistorySize) {
                    history.shift();
                    historyIndex--;
                }

                updateUndoRedoButtons();
            }

            function getCurrentCvData() {
                const controls = getControls();
                return {
                    nomPrenom: document.getElementById('cv-nom-prenom-preview')?.textContent || '',
                    poste: document.getElementById('cv-poste-preview')?.textContent || '',
                    description: document.getElementById('cv-description-preview')?.innerHTML || '',
                    experiences: getDynamicItemsData(controls.experienceList),
                    formations: getDynamicItemsData(controls.formationList),
                    competences: document.getElementById('cv-competences-preview')?.innerHTML || '',
                    interests: document.getElementById('cv-interets-preview')?.innerHTML || '',
                    bannerData: {
                        nom: document.getElementById('banner-nom-preview')?.textContent || '',
                        poste: document.getElementById('banner-poste-preview')?.textContent || '',
                        contact: document.getElementById('banner-contact-preview')?.innerHTML || ''
                    }
                };
            }

            function restoreFromHistory(state) {
                if (!state || !state.cvData) return;

                // Restore basic info
                const nomPrenomEl = document.getElementById('cv-nom-prenom-preview');
                const posteEl = document.getElementById('cv-poste-preview');
                const descEl = document.getElementById('cv-description-preview');
                const compEl = document.getElementById('cv-competences-preview');
                const interestsEl = document.getElementById('cv-interets-preview');

                if (nomPrenomEl) nomPrenomEl.textContent = state.cvData.nomPrenom;
                if (posteEl) posteEl.textContent = state.cvData.poste;
                if (descEl) descEl.innerHTML = state.cvData.description;
                if (compEl) compEl.innerHTML = state.cvData.competences;
                if (interestsEl) interestsEl.innerHTML = state.cvData.interests;

                // Restore banner
                const bannerNomEl = document.getElementById('banner-nom-preview');
                const bannerPosteEl = document.getElementById('banner-poste-preview');
                const bannerContactEl = document.getElementById('banner-contact-preview');

                if (bannerNomEl) bannerNomEl.textContent = state.cvData.bannerData?.nom || '';
                if (bannerPosteEl) bannerPosteEl.textContent = state.cvData.bannerData?.poste || '';
                if (bannerContactEl) bannerContactEl.innerHTML = state.cvData.bannerData?.contact || '';

                // Restore dynamic items
                const controls = getControls();
                restoreDynamicItems(controls.experienceList, state.cvData.experiences || []);
                restoreDynamicItems(controls.formationList, state.cvData.formations || []);

                updatePreview('form');
            }

            function restoreDynamicItems(container, items) {
                // Clear existing items
                container.innerHTML = '';

                // Recreate items
                items.forEach(item => {
                    if (container.id === 'experience-list') {
                        createDynamicItem(container, [
                            { key: 'title', placeholder: 'Titre du poste' },
                            { key: 'meta', placeholder: 'Entreprise & Dates' },
                            { key: 'desc', placeholder: 'Description des missions', type: 'textarea' }
                        ], item);
                    } else if (container.id === 'formation-list') {
                        createDynamicItem(container, [
                            { key: 'title', placeholder: 'Nom du diplôme' },
                            { key: 'meta', placeholder: 'Établissement & Année' }
                        ], item);
                    }
                });
            }

            function updateUndoRedoButtons() {
                const controls = getControls();
                const undoBtn = controls.undoBtn;
                const redoBtn = controls.redoBtn;

                if (undoBtn) {
                    undoBtn.disabled = historyIndex <= 0;
                    undoBtn.classList.toggle('disabled', historyIndex <= 0);
                }

                if (redoBtn) {
                    redoBtn.disabled = historyIndex >= history.length - 1;
                    redoBtn.classList.toggle('disabled', historyIndex >= history.length - 1);
                }
            }

            function undo() {
                if (historyIndex > 0) {
                    historyIndex--;
                    restoreFromHistory(history[historyIndex]);
                    updateUndoRedoButtons();
                    showNotification('Annulé', 'info');
                } else {
                    showNotification('Aucune action à annuler', 'warning');
                }
            }

            function redo() {
                if (historyIndex < history.length - 1) {
                    historyIndex++;
                    restoreFromHistory(history[historyIndex]);
                    updateUndoRedoButtons();
                    showNotification('Rétabli', 'info');
                } else {
                    showNotification('Aucune action à rétablir', 'warning');
                }
            }
            
            // --- DRAG & DROP & RESIZE ---
            let activeResizer = null;
            let activeContainer = null;
            let activeCol1 = null;
            let initialX = 0;
            let initialCol1Width = 0;

            function initResize(e) {
                e.preventDefault();
                activeResizer = e.target;
                activeContainer = activeResizer.parentElement;
                const columns = activeContainer.querySelectorAll('.cv-column');
                activeCol1 = columns[0];
                initialX = e.clientX;
                initialCol1Width = activeCol1.offsetWidth;

                document.addEventListener('mousemove', doResize);
                document.addEventListener('mouseup', stopResize);
                document.body.classList.add('is-resizing');
            }

            function doResize(e) {
                if (!activeResizer) return;
                const dx = e.clientX - initialX;
                const newCol1Width = initialCol1Width + dx;
                const containerWidth = activeContainer.offsetWidth;
                
                if (newCol1Width < 50 || newCol1Width > containerWidth - 50) return;

                const newCol1Percent = (newCol1Width / containerWidth) * 100;
                const newCol2Percent = 100 - newCol1Percent;

                activeContainer.classList.remove('layout-2-col-33-67', 'layout-2-col-50-50', 'layout-2-col-67-33');
                activeContainer.style.gridTemplateColumns = `${newCol1Percent}% ${newCol2Percent}%`;
                activeResizer.style.left = `${newCol1Percent}%`;
            }

            function stopResize() {
                document.removeEventListener('mousemove', doResize);
                document.removeEventListener('mouseup', stopResize);
                document.body.classList.remove('is-resizing');
                activeResizer = null;
                activeContainer = null;
                activeCol1 = null;
            }

            function setupAllResizers() {
                document.querySelectorAll('.a4-page').forEach(page => {
                    const container = page.querySelector('.cv-body-container');
                    const oldResizer = container.querySelector('.column-resizer');
                    if (oldResizer) oldResizer.remove();

                    const columns = container.querySelectorAll('.cv-column');
                    if (columns.length === 2 && getComputedStyle(container).gridTemplateColumns.split(' ').length === 2) {
                        const resizer = document.createElement('div');
                        resizer.className = 'column-resizer';
                        container.appendChild(resizer);
                        const col1 = columns[0];
                        const col1WidthPercent = parseFloat(getComputedStyle(col1).width) / parseFloat(getComputedStyle(container).width) * 100;
                        resizer.style.left = col1WidthPercent + '%';
                        resizer.addEventListener('mousedown', initResize);
                    }
                });
            }

            function initializeSortableForPage(pageId) {
                const col1 = document.getElementById(`cv-col-${pageId}-1`);
                const col2 = document.getElementById(`cv-col-${pageId}-2`);
                const onEnd = () => { checkAllPagesOverflow(); };
                if (col1) new Sortable(col1, { group: 'cv-modules', animation: 150, handle: '.drag-handle', ghostClass: 'sortable-ghost', onEnd });
                if (col2) new Sortable(col2, { group: 'cv-modules', animation: 150, handle: '.drag-handle', ghostClass: 'sortable-ghost', onEnd });
            }

            // --- PANEL RESIZING ---
            let activePanelResizer = null;
            let activePanel = null;
            let initialPanelX = 0;
            let initialPanelWidth = 0;

            function initPanelResize(e) {
                e.preventDefault();
                activePanelResizer = e.target;
                activePanel = activePanelResizer.parentElement;
                initialPanelX = e.clientX;
                initialPanelWidth = activePanel.offsetWidth;

                document.addEventListener('mousemove', doPanelResize);
                document.addEventListener('mouseup', stopPanelResize);
                document.body.classList.add('is-panel-resizing');
            }

            function doPanelResize(e) {
                if (!activePanelResizer) return;
                const dx = e.clientX - initialPanelX;
                const newPanelWidth = initialPanelWidth + dx;
                const containerWidth = activePanel.parentElement.offsetWidth;

                // Constrain panel width between 200px and 80% of container
                const minWidth = 200;
                const maxWidth = containerWidth * 0.8;

                if (newPanelWidth < minWidth || newPanelWidth > maxWidth) return;

                const newPanelPercent = (newPanelWidth / containerWidth) * 100;
                activePanel.style.width = `${newPanelPercent}%`;
                activePanel.style.flex = 'none';
            }

            function stopPanelResize() {
                document.removeEventListener('mousemove', doPanelResize);
                document.removeEventListener('mouseup', stopPanelResize);
                document.body.classList.remove('is-panel-resizing');
                activePanelResizer = null;
                activePanel = null;
            }

            function setupPanelResizers() {
                const controlsResizer = document.getElementById('controls-resizer');
                if (controlsResizer) {
                    controlsResizer.addEventListener('mousedown', initPanelResize);
                }
            }

            function initializeSkillSorting() {
                const skillLists = document.querySelectorAll('#cv-competences-preview ul');
                skillLists.forEach(list => {
                    new Sortable(list, {
                        group: 'skills', animation: 150, ghostClass: 'skills-ghost',
                        onEnd: function () {
                            syncFormFromPreview(document.getElementById('cv-competences-preview'));
                        }
                    });
                });
            }

            // --- PAGE & OVERFLOW MANAGEMENT ---
            function checkPageOverflow(page) {
                requestAnimationFrame(() => {
                    // Using a 1px tolerance for floating point inaccuracies
                    const isOverflowing = page.scrollHeight > page.clientHeight + 1;
                    page.classList.toggle('is-overflowing', isOverflowing);
                });
            }

            function checkAllPagesOverflow() {
                document.querySelectorAll('.a4-page').forEach(checkPageOverflow);
            }

            function setupOverflowObserver(pageElement) {
                const observer = new ResizeObserver(() => {
                    checkPageOverflow(pageElement);
                });
                // Observe the page element itself and its direct content container
                observer.observe(pageElement);
                const bodyContainer = pageElement.querySelector('.cv-body-container');
                if (bodyContainer) {
                    observer.observe(bodyContainer);
                }
            }
            
            function addNewPage() {
                pageCounter++;
                const newPageContainer = document.createElement('div');
                newPageContainer.className = 'a4-page-container';
                const layoutClass = document.querySelector('.layout-btn.active')?.dataset.layout || 'layout-1-col';
                
                newPageContainer.innerHTML = `
                    <div id="page-${pageCounter}" class="a4-page">
                        <div class="cv-body-container ${layoutClass}">
                            <div id="cv-col-${pageCounter}-1" class="cv-column"></div>
                            <div id="cv-col-${pageCounter}-2" class="cv-column"></div>
                        </div>
                    </div>
                    <button class="remove-page-btn no-print"><i class="fas fa-trash-can"></i></button>
                `;
                
                const addBtnWrapper = document.getElementById('add-page-btn-wrapper');
                preview.previewWrapper.insertBefore(newPageContainer, addBtnWrapper);
                
                const newPageElement = document.getElementById(`page-${pageCounter}`);
                setupOverflowObserver(newPageElement);

                initializeSortableForPage(pageCounter);
                setupAllResizers();
                checkAllPagesOverflow();
            }


            // --- DYNAMIC CONTENT ---
            function createDynamicItem(container, fields, data = {}, index = -1) {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'p-2 border rounded-md bg-white relative';
                
                fields.forEach(field => {
                    const isTextarea = field.type === 'textarea';
                    const input = document.createElement(isTextarea ? 'textarea' : 'input');
                    
                    if (!isTextarea) input.type = 'text';
                    
                    input.placeholder = field.placeholder;
                    input.className = `cv-input w-full p-1 border rounded-sm mb-1 data-${field.key}`;
                    if(isTextarea) input.rows = 3;
                    input.value = data[field.key] || '';
                    itemDiv.appendChild(input);
                });

                const removeBtn = document.createElement('button');
                removeBtn.innerHTML = '<i class="fas fa-times-circle text-red-400 hover:text-red-600"></i>';
                removeBtn.className = 'absolute top-1 right-1 remove-dynamic-item-btn';
                itemDiv.appendChild(removeBtn);
                
                if (index !== -1 && index < container.children.length) {
                    container.insertBefore(itemDiv, container.children[index]);
                } else {
                    container.appendChild(itemDiv);
                }
                
                updatePreview('form');
                const firstInput = itemDiv.querySelector('input, textarea');
                if (firstInput) firstInput.focus();
            }

            function getDynamicData(container) {
                // Cette fonction est obsolète et a été remplacée par getDynamicItemsData
                // Elle est conservée temporairement pour compatibilité
                console.warn('getDynamicData is deprecated, use getDynamicItemsData instead');
                return getDynamicItemsData(container);
            }
            
            // --- SKILLS RENDERING ---
            function renderSkillsAsTags(text) {
                let html = '';
                const sections = text.split('\n').filter(Boolean);
                sections.forEach(section => {
                    const parts = section.split(':');
                    if (parts.length === 2 && parts[0].trim() !== '') {
                        html += `<h3 class="skill-category" contenteditable="true">${parts[0].trim()}</h3>`;
                        html += `<ul>${parts[1].split(',').map(item => item.trim().replace(/\s*\(.*\)/, '')).filter(Boolean).map(item => `<li class="skill-item" contenteditable="false">${item}<span class="delete-skill-btn">&times;</span></li>`).join('')}</ul>`;
                    } else {
                        html += `<ul>${section.split(',').map(item => item.trim().replace(/\s*\(.*\)/, '')).filter(Boolean).map(item => `<li class="skill-item" contenteditable="false">${item}<span class="delete-skill-btn">&times;</span></li>`).join('')}</ul>`;
                    }
                });
                return html;
            }

            function renderSkillsAsLevels() {
                let html = '';
                const gaugeStyle = document.querySelector('.gauge-style-btn.active')?.dataset.gaugeStyle || 'bar';
                const skillItems = controls.skillsLevelList.querySelectorAll('.skill-level-item');

                skillItems.forEach(item => {
                    const name = item.querySelector('.skill-name-input').value;
                    const level = item.querySelector('.skill-level-input').value;
                    if (!name) return;

                    html += `<div class="skill-level">
                                        <div class="skill-level-label" contenteditable="true">${name}</div>
                                        <div class="gauge-container">${renderGauge(level, gaugeStyle)}</div>
                                    </div>`;
                });
                return html;
            }
            
            function renderGauge(level, style) {
                const max = 5;
                let gaugeHtml = '';
                switch (style) {
                    case 'dots':
                        gaugeHtml = `<div class="gauge-dots">`;
                        for (let i = 1; i <= max; i++) gaugeHtml += `<span class="${i <= level ? 'filled' : ''}">●</span>`;
                        gaugeHtml += `</div>`;
                        break;
                    case 'stars':
                        gaugeHtml = `<div class="gauge-stars">`;
                        for (let i = 1; i <= max; i++) gaugeHtml += `<i class="${i <= level ? 'fas' : 'far'} fa-star ${i <= level ? 'filled' : ''}"></i>`;
                        gaugeHtml += `</div>`;
                        break;
                    case 'squares':
                         gaugeHtml = `<div class="gauge-squares">`;
                        for (let i = 1; i <= max; i++) gaugeHtml += `<span class="${i <= level ? 'filled' : ''}">■</span>`;
                        gaugeHtml += `</div>`;
                        break;
                    case 'number':
                        gaugeHtml = `<div class="gauge-number">${level}/${max}</div>`;
                        break;
                    case 'bar':
                    default:
                        const width = (level / max) * 100;
                        gaugeHtml = `<div class="gauge-bar-bg"><div class="gauge-bar-fill" style="width: ${width}%;"></div></div>`;
                        break;
                }
                return gaugeHtml;
            }

            function renderSkillsAsSimple(text) {
                let html = '<ul>';
                const skills = text.split(/,|\n/).map(s => s.trim().replace(/\s*\(.*\)/, '')).filter(Boolean);
                skills.forEach(skill => {
                    html += `<li>${skill}</li>`;
                });
                html += '</ul>';
                return html;
            }

            function createSkillLevelItem(name = '', level = 3) {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'skill-level-item flex items-center gap-2';
                itemDiv.innerHTML = `
                    <input type="text" placeholder="Compétence" value="${name}" class="skill-name-input cv-input flex-grow p-1 border rounded-sm">
                    <input type="range" value="${level}" min="1" max="5" class="skill-level-input w-24">
                    <span class="skill-level-value text-sm font-mono">${level}/5</span>
                    <button class="remove-skill-level-btn text-red-400 hover:text-red-600"><i class="fas fa-times-circle"></i></button>
                `;
                controls.skillsLevelList.appendChild(itemDiv);
                updatePreview('form');
            }

            // --- UPDATES & FORMATTING ---
            function updateBannerBackground() {
                const opacity = controls.bannerBgOpacity.value;
                const blur = controls.bannerBgBlur.value;
                const grayscale = controls.bannerBgGrayscale.checked;

                controls.bannerBgOpacityValue.textContent = opacity;
                controls.bannerBgBlurValue.textContent = blur;

                preview.bannerBgImg.style.opacity = opacity;
                preview.bannerBgImg.style.filter = `blur(${blur}px) grayscale(${grayscale ? 1 : 0})`;
            }

            function updatePreview(source = 'form') {
                if (source === 'form' || source === 'banner-style' || source === 'theme' || source === 'state') {
                    preview.cvNomPrenom.textContent = `${controls.prenom.value} ${controls.nom.value}`.trim() || 'Prénom NOM';
                    preview.cvPoste.textContent = controls.poste.value || 'Poste Recherché';
                    preview.cvDescription.innerHTML = `<div class="editable-wrapper"><p contenteditable="true">${controls.description.value.replace(/\n/g, '<br>') || '&nbsp;'}</p><span class="delete-line-btn"><i class="fas fa-times"></i></span></div>`;
                    
                    const renderDynamicList = (previewContainer, controlContainer, type) => {
                        previewContainer.innerHTML = '';
                        const data = getDynamicData(controlContainer);

                        const createInsertButton = (type, index) => {
                            const wrapper = document.createElement('div');
                            wrapper.className = 'insert-line-wrapper';
                            wrapper.innerHTML = `<button class="add-line-preview-btn" data-type="${type}" data-index="${index}" title="Insérer un nouveau bloc ici"><i class="fas fa-plus"></i></button>`;
                            return wrapper;
                        };

                        const createItemContainer = (item, i) => {
                            const itemContainer = document.createElement('div');
                            itemContainer.className = 'dynamic-item-container';
                            itemContainer.dataset.index = i;
                            itemContainer.dataset.type = type;

                            const itemContent = document.createElement('div');
                            itemContent.className = "dynamic-preview-item";
                            itemContent.innerHTML = `
                                <button class="delete-block-btn" title="Supprimer le bloc"><i class="fas fa-trash-alt"></i></button>
                                <button class="duplicate-block-btn" title="Dupliquer le bloc"><i class="fas fa-copy"></i></button>
                                <button class="move-up-btn" title="Déplacer vers le haut"><i class="fas fa-arrow-up"></i></button>
                                <button class="move-down-btn" title="Déplacer vers le bas"><i class="fas fa-arrow-down"></i></button>
                            `;

                            if (type === 'experience') {
                                const titleHTML = `<div class="editable-wrapper"><p class="item-title" contenteditable="true">${item.title || '&nbsp;'}</p><span class="delete-line-btn"><i class="fas fa-times"></i></span></div>`;
                                const metaHTML = `<div class="editable-wrapper"><p class="item-meta" contenteditable="true">${item.meta || '&nbsp;'}</p><span class="delete-line-btn"><i class="fas fa-times"></i></span></div>`;
                                const descHTML = `<div class="editable-wrapper"><p class="mt-1" contenteditable="true">${item.desc.replace(/\n/g, '<br>') || '&nbsp;'}</p><span class="delete-line-btn"><i class="fas fa-times"></i></span></div>`;
                                const addButtonHTML = `<button class="add-desc-line-btn"><i class="fas fa-plus mr-1"></i> Ajouter une mission</button>`;
                                itemContent.innerHTML += `${titleHTML}${metaHTML}${descHTML}${addButtonHTML}`;
                            } else { // formation
                                const titleHTML = `<div class="editable-wrapper"><p class="item-title" contenteditable="true">${item.title || '&nbsp;'}</p><span class="delete-line-btn"><i class="fas fa-times"></i></span></div>`;
                                const metaHTML = `<div class="editable-wrapper"><p class="item-meta" contenteditable="true">${item.meta || '&nbsp;'}</p><span class="delete-line-btn"><i class="fas fa-times"></i></span></div>`;
                                itemContent.innerHTML += `${titleHTML}${metaHTML}`;
                            }
                            
                            itemContainer.appendChild(createInsertButton(type, i));
                            itemContainer.appendChild(itemContent);
                            return itemContainer;
                        };
                        
                        data.forEach((item, i) => {
                            previewContainer.appendChild(createItemContainer(item, i));
                        });
                        const finalButtonWrapper = document.createElement('div');
                        finalButtonWrapper.className = 'dynamic-item-container';
                        finalButtonWrapper.appendChild(createInsertButton(type, data.length));
                        previewContainer.appendChild(finalButtonWrapper);
                    };

                    renderDynamicList(preview.cvExperience, controls.experienceList, 'experience');
                    renderDynamicList(preview.cvFormation, controls.formationList, 'formation');

                    const skillStyle = document.querySelector('.skill-style-btn.active')?.dataset.skillStyle || 'tags';
                    preview.cvCompetences.dataset.style = skillStyle;
                    
                    if (skillStyle === 'tags') {
                        preview.cvCompetences.innerHTML = renderSkillsAsTags(controls.competences.value);
                        initializeSkillSorting(); 
                    } else if (skillStyle === 'levels') {
                        preview.cvCompetences.innerHTML = renderSkillsAsLevels();
                    } else { // simple
                        preview.cvCompetences.innerHTML = renderSkillsAsSimple(controls.competences.value);
                    }

                    document.querySelectorAll('.custom-module-preview').forEach(m => m.remove());
                    Array.from(controls.customSectionsList.children).forEach(div => {
                        const sectionId = div.dataset.sectionId;
                        const title = div.querySelector('input').value;
                        const content = div.querySelector('textarea').value;
                        const iconClass = div.dataset.icon || 'fas fa-puzzle-piece';
                        
                        const moduleDiv = document.createElement('div');
                        moduleDiv.id = sectionId;
                        moduleDiv.className = 'cv-module custom-module-preview'; 
                        moduleDiv.innerHTML = `
                            <div class="drag-handle"><i class="fas fa-grip-vertical"></i></div>
                            <h2 class="section-title" data-section-id="${sectionId}"><i class="${iconClass} section-icon"></i><span contenteditable="true">${title}</span><div class="section-ai-actions"><button class="ai-action-btn toggle-visibility-btn" title="Masquer/Afficher la section"><i class="fas fa-eye"></i></button></div></h2>
                            <div class="dynamic-preview-item">
                                <button class="delete-block-btn" title="Supprimer la section"><i class="fas fa-trash-alt"></i></button>
                                <div class="editable-wrapper">
                                    <div class="custom-content" contenteditable="true">${content.replace(/\n/g, '<br>') || '&nbsp;'}</div>
                                    <span class="delete-line-btn"><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                        `;
                        const lastModule = document.querySelector('#competences-module');
                        if(lastModule && lastModule.parentElement) {
                            lastModule.parentElement.insertBefore(moduleDiv, lastModule.nextSibling);
                        }
                    });
                    
                    preview.bannerNom.textContent = controls.bannerNom.value || "Nom Prénom Recruteur";
                    preview.bannerPoste.textContent = controls.bannerPoste.value || "Poste du Recruteur";
                    preview.bannerEmail.textContent = controls.bannerEmail.value || "email@recruteur.com";
                    preview.bannerTel.textContent = controls.bannerTel.value || "01 23 45 67 89";
                }

                preview.bannerNom.style.fontFamily = controls.bannerNomFont.value;
                preview.bannerNom.style.fontSize = controls.bannerNomSize.value + 'pt';
                preview.bannerNom.style.color = controls.bannerNomColor.value;
                preview.bannerNom.style.fontWeight = controls.bannerNomBold.classList.contains('active') ? 'bold' : 'normal';
                preview.bannerNom.style.fontStyle = controls.bannerNomItalic.classList.contains('active') ? 'italic' : 'normal';
                
                preview.bannerPoste.style.fontSize = controls.bannerPosteSize.value + 'pt';
                preview.bannerPoste.style.color = controls.bannerPosteColor.value;
                preview.bannerPoste.style.fontWeight = controls.bannerPosteBold.classList.contains('active') ? 'bold' : 'normal';
                preview.bannerPoste.style.fontStyle = controls.bannerPosteItalic.classList.contains('active') ? 'italic' : 'normal';

                preview.bannerContact.style.fontSize = controls.bannerContactSize.value + 'pt';
                preview.bannerContact.style.color = controls.bannerContactColor.value;
                preview.bannerContact.style.fontWeight = controls.bannerContactBold.classList.contains('active') ? 'bold' : 'normal';
                preview.bannerContact.style.fontStyle = controls.bannerContactItalic.classList.contains('active') ? 'italic' : 'normal';
                
                const dispo = controls.qualificationDispo.value;
                const salaire = controls.qualificationSalaire.value;
                const loc = controls.qualificationLoc.value;
                let qualHTML = '';
                if (dispo) qualHTML += `<div><i class="fas fa-calendar-check mr-1 text-gray-400"></i> ${dispo}</div>`;
                if (salaire) qualHTML += `<div><i class="fas fa-euro-sign mr-1 text-gray-400"></i> ${salaire}</div>`;
                if (loc) qualHTML += `<div><i class="fas fa-map-marker-alt mr-1 text-gray-400"></i> ${loc}</div>`;
                preview.qualificationPreview.innerHTML = qualHTML;
                preview.qualificationModule.style.display = (dispo || salaire || loc) ? '' : 'none';

                const isBannerEnabled = controls.toggleBanner.checked;
                const isBannerInTop = preview.fixedBannerTop.contains(preview.banner);
                const isBannerInBottom = preview.fixedBannerBottom.contains(preview.banner);
                const isBannerInModule = preview.bannerModule.contains(preview.banner);
                
                preview.bannerModule.classList.toggle('hidden', !isBannerEnabled || !isBannerInModule);
                preview.fixedBannerTop.style.display = (isBannerEnabled && isBannerInTop) ? 'block' : 'none';
                preview.fixedBannerBottom.style.display = (isBannerEnabled && isBannerInBottom) ? 'block' : 'none';

                // Mise à jour des styles avancés
                updateAdvancedStyles();

                checkAllPagesOverflow();
            }
            
            function syncFormFromPreview(element) {
                if (!element) return;
                const id = element.id;

                if (id === 'cv-competences-preview') {
                    const style = preview.cvCompetences.dataset.style;
                    if (style === 'levels') {
                        const skillLabels = preview.cvCompetences.querySelectorAll('.skill-level-label');
                        const controlInputs = controls.skillsLevelList.querySelectorAll('.skill-name-input');
                        skillLabels.forEach((label, index) => {
                            if (controlInputs[index]) {
                                controlInputs[index].value = label.textContent;
                            }
                        });
                    } else { 
                        let result = [];
                        const nodes = Array.from(element.childNodes);
                        for (let i = 0; i < nodes.length; i++) {
                            const node = nodes[i];
                            if (node.nodeName === 'H3' && node.classList.contains('skill-category')) {
                                const categoryName = node.textContent.trim();
                                const nextNode = nodes[i + 1];
                                if (nextNode && nextNode.nodeName === 'UL') {
                                    const skills = Array.from(nextNode.querySelectorAll('li.skill-item')).map(li => li.textContent.replace('×', '').trim()).filter(Boolean).join(', ');
                                    if (categoryName && skills) {
                                        result.push(`${categoryName}: ${skills}`);
                                    }
                                    i++; 
                                }
                            } else if (node.nodeName === 'UL') {
                                const skills = Array.from(node.querySelectorAll('li')).map(li => li.textContent.replace('×', '').trim()).filter(Boolean).join(', ');
                                if (skills) {
                                    result.push(skills);
                                }
                            }
                        }
                        controls.competences.value = result.join('\n');
                    }
                    return;
                }
                
                let text = element.innerHTML.replace(/<br\s*\/?>/gi, '\n').trim();
                text = new DOMParser().parseFromString(text, "text/html").documentElement.textContent;

                if (id) {
                    switch (id) {
                        case 'cv-nom-prenom-preview': const nameParts = text.trim().split(' '); controls.prenom.value = nameParts.shift() || ''; controls.nom.value = nameParts.join(' ') || ''; break;
                        case 'cv-poste-preview': controls.poste.value = text; break;
                        case 'cv-description-preview': controls.description.value = text; break;
                        case 'banner-nom-preview': controls.bannerNom.value = text; break;
                        case 'banner-poste-preview': controls.bannerPoste.value = text; break;
                        case 'banner-email-preview': controls.bannerEmail.value = text; break;
                        case 'banner-tel-preview': controls.bannerTel.value = text; break;
                    }
                } else {
                    const itemContainer = element.closest('.dynamic-item-container');
                    if (itemContainer) {
                        const index = parseInt(itemContainer.dataset.index, 10);
                        const type = itemContainer.dataset.type;
                        const formList = type === 'experience' ? controls.experienceList : controls.formationList;
                        const formItem = formList.children[index];
                        if (!formItem) return;

                        const title = itemContainer.querySelector('.item-title')?.textContent || '';
                        const meta = itemContainer.querySelector('.item-meta')?.textContent || '';
                        const descEl = itemContainer.querySelector('.mt-1');
                        const desc = descEl ? new DOMParser().parseFromString(descEl.innerHTML.replace(/<br\s*\/?>/gi, '\n'), "text/html").documentElement.textContent : '';

                        if (formItem.querySelector('.data-title')) formItem.querySelector('.data-title').value = title;
                        if (formItem.querySelector('.data-meta')) formItem.querySelector('.data-meta').value = meta;
                        if (formItem.querySelector('.data-desc')) formItem.querySelector('.data-desc').value = desc;

                    } else {
                        const customModule = element.closest('.custom-module-preview');
                        if (customModule) {
                            const sectionId = customModule.id;
                            const controlTitleInput = document.getElementById(`custom-section-title-${sectionId}`);
                            const controlContentTextarea = document.getElementById(`custom-section-content-${sectionId}`);
                            
                            if (element.matches('[contenteditable].section-title span')) {
                               if (controlTitleInput) controlTitleInput.value = element.textContent;
                            }
                            if (element.matches('[contenteditable].custom-content')) {
                               if (controlContentTextarea) controlContentTextarea.value = text;
                            }
                        }
                    }
                }
            }

            function moveBannerTo(destination) {
                const recruiterBanner = preview.banner;
                if (destination === 'top') {
                    preview.fixedBannerTop.appendChild(recruiterBanner);
                } else if (destination === 'bottom') {
                    preview.fixedBannerBottom.appendChild(recruiterBanner);
                } else { // 'modular'
                    preview.bannerModule.querySelector('.drag-handle').insertAdjacentElement('afterend', recruiterBanner);
                }
                const isModular = (destination === 'modular');
                document.getElementById('banner-fix-controls').classList.toggle('hidden', !isModular);
                controls.modularBannerBtn.classList.toggle('hidden', isModular);
                updatePreview('banner-move');
            }

            function addCustomSection(title = 'Nouvelle Section', content = '', id = null, icon = 'fas fa-puzzle-piece') {
                customSectionCounter++;
                const sectionId = id || `custom-module-${Date.now()}-${customSectionCounter}`;
                
                const controlDiv = document.createElement('div');
                controlDiv.className = 'p-2 border rounded-md bg-white relative';
                controlDiv.dataset.sectionId = sectionId;
                controlDiv.dataset.icon = icon;
                controlDiv.innerHTML = `
                    <input type="text" value="${title}" class="w-full p-1 border rounded-sm mb-1 font-semibold custom-section-input" id="custom-section-title-${sectionId}">
                    <textarea rows="4" class="w-full p-1 border rounded-sm mb-1 custom-section-input" id="custom-section-content-${sectionId}" placeholder="Contenu...">${content}</textarea>
                    <button class="absolute top-1 right-1 text-red-400 hover:text-red-600 remove-section-btn"><i class="fas fa-times-circle"></i></button>
                `;
                controls.customSectionsList.appendChild(controlDiv);
                
                updatePreview('form');
                updateAllStyles();
            }

            async function callGeminiAPI(prompt, schema) {
                // Vérifier si une clé API Gemini est disponible
                if (!apiSettings.gemini.apiKey) {
                    showNotification("Veuillez configurer votre clé API Gemini dans les paramètres.", 'error');
                    return null;
                }

                showLoader("L'IA réfléchit...");
                try {
                    const apiKey = apiSettings.gemini.apiKey;
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
                    
                    const payload = {
                        contents: [{ role: "user", parts: [{ text: prompt }] }],
                        generationConfig: schema ? { responseMimeType: "application/json", responseSchema: schema } : {}
                    };

                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        const errorBody = await response.text();
                        throw new Error(`Erreur API: ${response.status} ${response.statusText} - ${errorBody}`);
                    }

                    const result = await response.json();
                    
                    if (result.candidates && result.candidates.length > 0) {
                         if (result.candidates[0].finishReason !== "STOP" && result.candidates[0].finishReason !== "MAX_TOKENS") {
                               throw new Error(`L'IA a été bloquée (raison: ${result.candidates[0].finishReason}). Veuillez reformuler votre demande.`);
                         }
                        if (result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
                            const text = result.candidates[0].content.parts[0].text;
                            return schema ? JSON.parse(text) : text;
                        }
                    }
                    
                    throw new Error("Réponse invalide ou vide reçue de l'IA.");

                } catch (error) {
                    console.error("Erreur détaillée de l'IA:", error);
                    showNotification(`Erreur de l'IA : ${error.message}`, 'error', 5000);
                    return null;
                } finally {
                    hideLoader();
                }
            }

            async function callChatGPTAPI(prompt) {
                // Vérifier si une clé API ChatGPT est disponible
                if (!apiSettings.chatgpt.apiKey) {
                    showNotification("Veuillez configurer votre clé API ChatGPT dans les paramètres.", 'error');
                    return null;
                }

                showLoader("L'IA réfléchit...");
                try {
                    const apiKey = apiSettings.chatgpt.apiKey;
                    const apiUrl = 'https://api.openai.com/v1/chat/completions';

                    const payload = {
                        model: apiSettings.chatgpt.model || 'gpt-3.5-turbo',
                        messages: [{ role: 'user', content: prompt }],
                        max_tokens: 1000,
                        temperature: 0.7
                    };

                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}`
                        },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        const errorBody = await response.json();
                        throw new Error(`Erreur API ChatGPT: ${errorBody.error?.message || response.statusText}`);
                    }

                    const result = await response.json();

                    if (result.choices && result.choices.length > 0) {
                        return result.choices[0].message.content;
                    }

                    throw new Error("Réponse invalide ou vide reçue de ChatGPT.");

                } catch (error) {
                    console.error("Erreur détaillée de ChatGPT:", error);
                    showNotification(`Erreur ChatGPT : ${error.message}`, 'error', 5000);
                    return null;
                } finally {
                    hideLoader();
                }
            }

            async function callAIAPI(prompt, schema = null) {
                // Vérifier qu'un fournisseur est sélectionné
                if (!apiSettings.provider) {
                    showNotification("Veuillez sélectionner un fournisseur d'IA dans les paramètres.", 'error');
                    return null;
                }

                // Vérifier que la clé API est disponible
                const hasApiKey = (apiSettings.provider === 'gemini' && apiSettings.gemini.apiKey) ||
                                 (apiSettings.provider === 'chatgpt' && apiSettings.chatgpt.apiKey);

                if (!hasApiKey) {
                    showNotification(`Veuillez configurer votre clé API ${apiSettings.provider} dans les paramètres.`, 'error');
                    return null;
                }

                // Router vers la bonne API
                if (apiSettings.provider === 'gemini') {
                    return await callGeminiAPI(prompt, schema);
                } else if (apiSettings.provider === 'chatgpt') {
                    return await callChatGPTAPI(prompt);
                } else {
                    showNotification("Fournisseur d'IA non supporté.", 'error');
                    return null;
                }
            }

            function updateAllStyles() {
                root.style.setProperty('--primary-color', controls.primaryColorPicker.value);
                root.style.setProperty('--secondary-color', controls.secondaryColorPicker.value);
                root.style.setProperty('--body-text-color', controls.bodyTextColorPicker.value);
                root.style.setProperty('--font-family-h1', controls.fontFamilyH1Select.value);
                root.style.setProperty('--font-family-h2', controls.fontFamilyH2Select.value);
                root.style.setProperty('--font-family-body', controls.fontFamilyBodySelect.value);

                const activeStyle = document.querySelector('.section-title-style-btn.active')?.dataset.titleStyle || 'style-underline';
                document.querySelectorAll('.section-title').forEach(title => {
                    title.classList.remove('style-underline', 'style-side-line', 'style-background', 'style-boxed');
                    title.classList.add(activeStyle);
                });
                
                const banner = preview.banner;
                const newBannerStyle = controls.bannerStyleSelect.value;
                const newAlign = document.querySelector('.banner-align-btn.active')?.dataset.bannerAlign || 'left';
                const isInverted = controls.bannerInvertBtn.classList.contains('active');

                const classesToRemove = Array.from(banner.classList).filter(c => c.startsWith('banner-style-'));
                if (classesToRemove.length > 0) banner.classList.remove(...classesToRemove);

                if (newBannerStyle) banner.classList.add(newBannerStyle);
                
                const contentWrapper = banner.querySelector('.banner-content-wrapper');
                contentWrapper.className = 'banner-content-wrapper'; // Reset classes
                contentWrapper.classList.add(`banner-align-${newAlign}`);
                if (isInverted) contentWrapper.classList.add('banner-layout-inverted');

                // Mise à jour des styles avancés
                updateAdvancedStyles();

                checkAllPagesOverflow();
            }

            function updateAdvancedStyles() {
                // Styles de colonnes
                const activeColumnStyle = document.querySelector('.column-style-btn.active')?.dataset.columnStyle || 'normal';
                document.querySelectorAll('.cv-body-container').forEach(container => {
                    container.className = container.className.replace(/column-style-\w+/g, '');
                    if (activeColumnStyle !== 'normal') {
                        container.classList.add(`column-style-${activeColumnStyle}`);
                    }
                });

                // Fonds de page
                const activeBgStyle = document.querySelector('.bg-style-btn.active')?.dataset.bgStyle || 'normal';
                document.querySelectorAll('.cv-page').forEach(page => {
                    page.className = page.className.replace(/bg-style-\w+/g, '');
                    if (activeBgStyle !== 'normal') {
                        page.classList.add(`bg-style-${activeBgStyle}`);
                    }
                });

                // Séparateurs
                const activeSeparator = document.querySelector('.separator-btn.active')?.dataset.separator || 'line';
                document.documentElement.style.setProperty('--separator-style', activeSeparator);

                // Animations
                const activeAnimation = document.querySelector('.animation-btn.active')?.dataset.animation || 'none';
                document.querySelectorAll('.cv-page').forEach(page => {
                    page.className = page.className.replace(/animation-\w+/g, '');
                    if (activeAnimation !== 'none') {
                        page.classList.add(`animation-${activeAnimation}`);
                    }
                });
            }

            function populateFontSelectors() {
                const fonts = [
                    { name: 'Lato', value: "'Lato', sans-serif" },
                    { name: 'Montserrat', value: "'Montserrat', sans-serif" },
                    { name: 'Roboto Mono', value: "'Roboto Mono', monospace" },
                    { name: 'Playfair Display', value: "'Playfair Display', serif" },
                    { name: 'Merriweather', value: "'Merriweather', serif" },
                    { name: 'Oswald', value: "'Oswald', sans-serif" },
                    { name: 'Open Sans', value: "'Open Sans', sans-serif" },
                    { name: 'Source Sans Pro', value: "'Source Sans Pro', sans-serif" },
                    { name: 'Nunito Sans', value: "'Nunito Sans', sans-serif" },
                    { name: 'Cormorant Garamond', value: "'Cormorant Garamond', serif" },
                ];
                const selects = [controls.fontFamilyH1Select, controls.fontFamilyH2Select, controls.fontFamilyBodySelect, controls.bannerNomFont];
                selects.forEach(select => {
                    if (!select) return;
                    select.innerHTML = '';
                    fonts.forEach(font => {
                        const option = document.createElement('option');
                        option.value = font.value;
                        option.textContent = font.name;
                        select.appendChild(option);
                    });
                });
            }
            
            function populateIconPicker() {
                const icons = ["fa-user-circle", "fa-briefcase", "fa-graduation-cap", "fa-star", "fa-puzzle-piece", "fa-globe", "fa-paint-brush", "fa-certificate", "fa-lightbulb", "fa-heart", "fa-cogs", "fa-code", "fa-chart-line", "fa-comments", "fa-bullhorn", "fa-trophy", "fa-book", "fa-wrench", "fa-users", "fa-award", "fa-phone", "fa-envelope", "fa-map-marker-alt", "fa-linkedin", "fa-github"];
                controls.iconPickerGrid.innerHTML = '';
                icons.forEach(iconClass => {
                    const iconEl = document.createElement('i');
                    iconEl.className = `fas ${iconClass}`;
                    iconEl.dataset.icon = `fas ${iconClass}`;
                    controls.iconPickerGrid.appendChild(iconEl);
                });
            }

            function resetCVToDefault() {
                document.querySelectorAll('.cv-input, .banner-input, .custom-section-input').forEach(input => {
                    if(input.type === 'checkbox') input.checked = false;
                    else if (input.type !== 'range' && input.type !== 'color') input.value = '';
                });
                
                controls.experienceList.innerHTML = '';
                controls.formationList.innerHTML = '';
                controls.customSectionsList.innerHTML = '';
                controls.skillsLevelList.innerHTML = '';
                
                document.querySelectorAll('.custom-module-preview').forEach(m => m.remove());
                
                setDefaultRecruiterInfo();
                applyTheme('professional');
                document.querySelector('.layout-btn[data-layout="layout-1-col"]').click();
                document.querySelector('.skill-style-btn[data-skill-style="tags"]').click();

                // Initialisation des nouveaux boutons de styles avancés
                document.querySelector('.column-style-btn[data-column-style="normal"]').click();
                document.querySelector('.bg-style-btn[data-bg-style="normal"]').click();
                document.querySelector('.separator-btn[data-separator="line"]').click();
                document.querySelector('.animation-btn[data-animation="none"]').click();
                
                Object.values(sliders).forEach(config => {
                    const defaultValue = config.el.defaultValue;
                    config.el.value = defaultValue;
                    config.valueEl.textContent = defaultValue;
                    root.style.setProperty(config.property, `${defaultValue}${config.unit}`);
                });
                
                moveBannerTo('modular');
                removeBannerBackground();

                document.querySelectorAll('.completion-checkbox').forEach(cb => {
                    cb.checked = false;
                    cb.closest('details').open = true;
                });
                updateProgressBar();
                
                updatePreview('form');
                updateAllStyles();
                showNotification("Le CV a été réinitialisé.", "success");
            }

            function applyTheme(themeName) {
                const theme = themes[themeName];
                if (!theme) return;

                controls.primaryColorPicker.value = theme.primaryColor;
                controls.secondaryColorPicker.value = theme.secondaryColor;
                controls.bodyTextColorPicker.value = theme.bodyTextColor;
                controls.fontFamilyH1Select.value = theme.fontH1;
                controls.fontFamilyH2Select.value = theme.fontH2;
                controls.fontFamilyBodySelect.value = theme.fontBody;

                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                document.querySelector(`.theme-btn[data-theme="${themeName}"]`)?.classList.add('active');

                updateAllStyles();
                updatePreview('theme');
            }
            
            async function handleAIAction(action, moduleElement) {
                let prompt = '';
                let targetControl = null;

                switch (action) {
                    case 'rewrite-profile':
                        const profileText = controls.description.value;
                        if (!profileText) { showNotification("Le profil est vide.", "error"); return; }
                        prompt = `En tant qu'expert en recrutement, réécris ce profil de CV pour qu'il soit plus percutant et professionnel, en utilisant des verbes d'action forts. Garde une longueur similaire et un ton professionnel. Ne retourne que le paragraphe final réécrit, sans aucun commentaire. Le profil actuel est : "${profileText}"`;
                        targetControl = controls.description;
                        const newProfile = await callAIAPI(prompt);
                        if (newProfile && targetControl) {
                            targetControl.value = newProfile;
                            showNotification("Profil amélioré par l'IA.", "success");
                        }
                        break;
                    case 'summarize-experience':
                        await summarizeAllExperiencesAI();
                        break;
                    case 'rewrite-formation':
                        const formations = getDynamicData(controls.formationList);
                        if (formations.length === 0) { showNotification("Aucune formation à améliorer.", "error"); return; }
                        const formationSchema = { type: "ARRAY", items: { type: "OBJECT", properties: { title: { type: "STRING" }, meta: { type: "STRING" } } } };
                        const formationPrompt = `En tant qu'expert RH, améliore la formulation de ces entrées de formation pour un CV. Rends les titres plus percutants et les descriptions plus claires si nécessaire. Ne retourne que le résultat final sous forme de tableau JSON \`[{"title": "...", "meta": "..."}]\` sans aucun commentaire ou texte additionnel. Voici les données actuelles : ${JSON.stringify(formations.map(f => ({ title: f.title, meta: f.meta })))}`;
                        const newFormations = await callAIAPI(formationPrompt, formationSchema);
                        if (newFormations && Array.isArray(newFormations)) {
                            controls.formationList.innerHTML = '';
                            newFormations.forEach(form => createDynamicItem(controls.formationList, [{ key: 'title', placeholder: 'Nom du diplôme' }, { key: 'meta', placeholder: 'Établissement & Année' }], form));
                            showNotification("Formations améliorées par l'IA.", "success");
                        }
                        break;
                    case 'rewrite-skills':
                        await synthesizeSkillsWithAI();
                        break;
                    default:
                        return;
                }
                updatePreview('form');
            }
            
            function setDefaultRecruiterInfo() {
                controls.bannerNom.value = "Lyes AMARA";
                controls.bannerPoste.value = "Responsable d’activité recrutement – BTP – France";
                controls.bannerEmail.value = "l.amara@ltd-international.com";
                controls.bannerTel.value = "01 56 02 12 25 / 06 34 25 32 96";
            }

            function anonymizeCV() {
                if (isAnonymized) {
                    controls.nom.value = originalData.nom;
                    controls.prenom.value = originalData.prenom;
                    
                    controls.anonymizeBtn.innerHTML = '<i class="fa-solid fa-user-secret"></i> Anonymiser le CV';
                    isAnonymized = false;
                    showNotification("CV désanonymisé.", "success");
                } else {
                    originalData = {
                        nom: controls.nom.value,
                        prenom: controls.prenom.value,
                    };
                    
                    const firstLetter = originalData.nom ? originalData.nom.charAt(0) + '.' : '';
                    controls.nom.value = firstLetter;
                    controls.prenom.value = originalData.prenom;
                    
                    controls.anonymizeBtn.innerHTML = '<i class="fa-solid fa-user-check"></i> Désanonymiser le CV';
                    isAnonymized = true;
                    showNotification("CV anonymisé.", "success");
                }
                updatePreview('form');
            }

            async function summarizeAllExperiencesAI() {
                const experienceItems = controls.experienceList.querySelectorAll('.data-desc');
                if (experienceItems.length === 0) {
                    showNotification("Aucune expérience à résumer.", "error");
                    return;
                }

                showLoader("Synthèse des expériences...");
                for (let i = 0; i < experienceItems.length; i++) {
                    const textarea = experienceItems[i];
                    const originalText = textarea.value;
                    if (originalText) {
                        const prompt = `Résume la description de cette mission professionnelle en 5 lignes maximum. Utilise des verbes d'action et un format de liste à puces (chaque point commençant par '• '). Ne retourne que le texte final formaté en liste à puces, sans aucune phrase d'introduction, de conclusion ou de commentaire. Voici la description : "${originalText}"`;
                        const summary = await callAIAPI(prompt);
                        if (summary) {
                            textarea.value = summary;
                        }
                    }
                }
                hideLoader();
                updatePreview('form');
                showNotification("Toutes les expériences ont été synthétisées.", "success");
            }

            async function synthesizeSkillsWithAI() {
                const currentSkills = controls.competences.value;
                if (!currentSkills) {
                    showNotification("La liste de compétences est vide.", "error");
                    return;
                }
                const prompt = `Analyse cette liste de compétences de CV: "${currentSkills}". Regroupe-les par catégories pertinentes (ex: Langages, Frameworks, Outils, Logiciels, Langues, etc.). Retourne le résultat sous la forme "Catégorie 1: compétence A, compétence B\nCatégorie 2: compétence C, compétence D". Ne retourne que le texte final formaté, sans aucune phrase d'introduction, de conclusion ou de commentaire.`;

                const organizedSkills = await callAIAPI(prompt);
                if (organizedSkills) {
                    controls.competences.value = organizedSkills;
                    updatePreview('form');
                    showNotification("Compétences organisées par l'IA.", "success");
                }
            }

            async function limitSkillsWithAI() {
                const currentSkills = controls.competences.value;
                const jobTitle = controls.poste.value;
                if (!currentSkills) {
                    showNotification("La liste de compétences est vide.", "error");
                    return;
                }
                if (!jobTitle) {
                    showNotification("Veuillez renseigner le 'Poste recherché' pour de meilleurs résultats.", "error");
                    return;
                }
                const prompt = `À partir de cette liste de compétences: "${currentSkills}", sélectionne les 10 compétences les plus importantes et pertinentes pour un poste de "${jobTitle}". Retourne uniquement la liste des 10 compétences, séparées par des virgules, sans aucune phrase d'introduction, de conclusion ou de commentaire.`;

                const limitedSkills = await callAIAPI(prompt);
                if (limitedSkills) {
                    controls.competences.value = limitedSkills;
                    updatePreview('form');
                    showNotification("Compétences limitées à 10 par l'IA.", "success");
                }
            }
            
            function removeBannerBackground() {
                preview.bannerBgImg.src = '';
                controls.bannerBgImage.value = ''; // Reset file input
                controls.bannerBgOpacity.value = 1;
                controls.bannerBgBlur.value = 0;
                controls.bannerBgGrayscale.checked = false;
                updateBannerBackground();
            }

            // NEW: Progress Bar Update Function
            function updateProgressBar() {
                const checkboxes = document.querySelectorAll('.completion-checkbox');
                const total = checkboxes.length;
                const completed = document.querySelectorAll('.completion-checkbox:checked').length;
                const percentage = total > 0 ? (completed / total) * 100 : 0;

                const progressBar = document.getElementById('progress-bar');
                const progressText = document.getElementById('progress-text');

                if(progressBar) progressBar.style.width = `${percentage}%`;
                if(progressText) progressText.textContent = `${completed}/${total} sections complétées`;
            }

            function populateLevelsFromText() {
                const text = controls.competences.value;
                const skills = text
                    .replace(/.*:/g, '') // Remove category labels like "Langages:"
                    .split(/,|\n/)
                    .map(s => s.trim())
                    .filter(Boolean);

                controls.skillsLevelList.innerHTML = '';
                skills.forEach(skill => createSkillLevelItem(skill, 3));
            }

            // --- INITIALIZATION FUNCTION ---
            function initializeAll() {
                console.log("Initializing UI components and event listeners...");
                
                reinitializePreviewSelectors();
                initializeSortableForPage(1);
                
                populateFontSelectors();
                populateIconPicker();

                // --- EVENT LISTENERS ---

                const tabNavigation = document.getElementById('tab-navigation');
                const tabPanels = document.querySelectorAll('.tab-panel');
                const tabButtons = document.querySelectorAll('.tab-btn');
                
                tabNavigation.addEventListener('click', (e) => {
                    const tabBtn = e.target.closest('.tab-btn');
                    if (!tabBtn) return;
                    tabPanels.forEach(panel => panel.classList.add('hidden'));
                    tabButtons.forEach(btn => {
                        btn.classList.remove('border-blue-600', 'text-blue-600');
                        btn.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                    });
                    const targetPanelId = tabBtn.dataset.target;
                    document.querySelector(targetPanelId).classList.remove('hidden');
                    tabBtn.classList.add('border-blue-600', 'text-blue-600');
                    tabBtn.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                });
                tabButtons[0].click();

                controls.undoBtn.addEventListener('click', undo);
                controls.redoBtn.addEventListener('click', redo);
                document.addEventListener('keydown', (e) => {
                    if (e.ctrlKey && e.key === 'z') { e.preventDefault(); undo(); }
                    if (e.ctrlKey && e.key === 'y') { e.preventDefault(); redo(); }
                });

                controls.addExperienceBtn.addEventListener('click', () => createDynamicItem(controls.experienceList, [{ key: 'title', placeholder: 'Titre du poste' }, { key: 'meta', placeholder: 'Entreprise & Dates' }, { key: 'desc', placeholder: 'Description des missions', type: 'textarea' }]));
                controls.addFormationBtn.addEventListener('click', () => createDynamicItem(controls.formationList, [{ key: 'title', placeholder: 'Nom du diplôme' }, { key: 'meta', placeholder: 'Établissement & Année' }]));
                
                const controlsPanel = document.getElementById('controls');
                controlsPanel.addEventListener('input', (e) => {
                    if (e.target.matches('.cv-input, .banner-input, .custom-section-input, #banner-bg-opacity, #banner-bg-blur, #banner-bg-grayscale')) {
                        if (e.target.matches('#banner-bg-opacity, #banner-bg-blur, #banner-bg-grayscale')) {
                             updateBannerBackground();
                        } else {
                             updatePreview('form');
                             updateAllStyles();
                        }
                    }
                    if(e.target.matches('.completion-checkbox')) {
                        updateProgressBar();
                    }
                     if(e.target.matches('.skill-level-input')) {
                         e.target.nextElementSibling.textContent = `${e.target.value}/5`;
                         updatePreview('form');
                     }
                });
                 controlsPanel.addEventListener('change', (e) => {
                    if (e.target.matches('.cv-input, .banner-input, .custom-section-input')) {
                        updatePreview('form');
                        updateAllStyles();
                    }
                });

                controls.bannerImage.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => { preview.bannerImg.src = event.target.result; };
                        reader.readAsDataURL(file);
                    }
                });
                
                controls.bannerBgImage.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            preview.bannerBgImg.src = event.target.result;
                            updateBannerBackground();
                        };
                        reader.readAsDataURL(file);
                    }
                });

                preview.previewWrapper.addEventListener('input', (e) => {
                    if (e.target.hasAttribute('contenteditable')) {
                        syncFormFromPreview(e.target);
                    }
                });

                preview.previewWrapper.addEventListener('click', (e) => {
                    const target = e.target;
                    
                    const visibilityBtn = target.closest('.toggle-visibility-btn');
                    if (visibilityBtn) {
                        const moduleElement = visibilityBtn.closest('.cv-module');
                        const icon = visibilityBtn.querySelector('i');
                        if (moduleElement) {
                            moduleElement.classList.toggle('section-hidden');
                            const isHidden = moduleElement.classList.contains('section-hidden');
                            if (icon) {
                                icon.className = `fas ${isHidden ? 'fa-eye-slash' : 'fa-eye'}`;
                            }
                        }
                        return;
                    }

                    const aiBtn = target.closest('.ai-action-btn');
                    if (aiBtn) {
                        const action = aiBtn.dataset.action;
                        if (action) {
                            const moduleElement = aiBtn.closest('.cv-module');
                            handleAIAction(action, moduleElement);
                        }
                        return;
                    }

                    const deleteBlockBtn = target.closest('.delete-block-btn');
                    if (deleteBlockBtn) {
                        if (confirm('Êtes-vous sûr de vouloir supprimer ce bloc ? Cette action est irréversible.')) {
                            const itemContainer = deleteBlockBtn.closest('.dynamic-item-container');
                            if (itemContainer) {
                                const index = parseInt(itemContainer.dataset.index, 10);
                                const type = itemContainer.dataset.type;
                                const formList = type === 'experience' ? controls.experienceList : controls.formationList;
                                if (formList.children[index]) {
                                    formList.children[index].remove();
                                    updatePreview('form');
                                    showNotification('Bloc supprimé avec succès.', 'success');
                                }
                            } else {
                                const customModule = deleteBlockBtn.closest('.custom-module-preview');
                                if(customModule) {
                                    const controlItem = controls.customSectionsList.querySelector(`[data-section-id="${customModule.id}"]`);
                                    if(controlItem) controlItem.remove();
                                    customModule.remove();
                                    showNotification('Section personnalisée supprimée.', 'success');
                                }
                            }
                        }
                        return;
                    }

                    const addLineBtn = target.closest('.add-line-preview-btn');
                    if (addLineBtn) {
                        const index = parseInt(addLineBtn.dataset.index, 10);
                        const type = addLineBtn.dataset.type;
                        if (type === 'experience') createDynamicItem(controls.experienceList, [{ key: 'title', placeholder: 'Titre du poste' }, { key: 'meta', placeholder: 'Entreprise & Dates' }, { key: 'desc', placeholder: 'Description des missions', type: 'textarea' }], {}, index);
                        else if (type === 'formation') createDynamicItem(controls.formationList, [{ key: 'title', placeholder: 'Nom du diplôme' }, { key: 'meta', placeholder: 'Établissement & Année' }], {}, index);
                        return;
                    }

                    const deleteLineBtn = target.closest('.delete-line-btn');
                    if (deleteLineBtn) {
                        const wrapper = deleteLineBtn.closest('.editable-wrapper');
                        if (wrapper) {
                            wrapper.remove();
                            syncFormFromPreview(wrapper.closest('.dynamic-preview-item') || document.getElementById('cv-description-preview'));
                        }
                        return;
                    }
                    
                    const removePageBtn = target.closest('.remove-page-btn');
                    if (removePageBtn) {
                        if (confirm('Êtes-vous sûr de vouloir supprimer cette page ? Toutes les données de cette page seront perdues.')) {
                            const pageContainer = removePageBtn.closest('.a4-page-container');
                            if (pageContainer) {
                                pageContainer.remove();
                                checkAllPagesOverflow();
                                showNotification('Page supprimée avec succès.', 'success');
                            }
                        }
                        return;
                    }
                });

                controlsPanel.addEventListener('click', (e) => {
                    const target = e.target;

                    // Helper function to update item indices
                    function updateItemIndices(container) {
                        const items = container.querySelectorAll('.dynamic-item-container');
                        items.forEach((item, index) => {
                            item.dataset.index = index;
                        });
                    }
                    
                    const removeBtn = target.closest('.remove-dynamic-item-btn, .remove-skill-level-btn');
                    if (removeBtn) {
                        removeBtn.parentElement.remove();
                        updatePreview('form');
                        return;
                    }

                    // Handle duplicate button
                    const duplicateBtn = target.closest('.duplicate-block-btn');
                    if (duplicateBtn) {
                        const itemContainer = duplicateBtn.closest('.dynamic-item-container');
                        if (itemContainer) {
                            const clonedContainer = itemContainer.cloneNode(true);
                            // Update data-index for the cloned item
                            const currentIndex = parseInt(itemContainer.dataset.index);
                            clonedContainer.dataset.index = currentIndex + 1;
                            // Update indices for all subsequent items
                            const allContainers = itemContainer.parentElement.querySelectorAll('.dynamic-item-container');
                            for (let i = currentIndex + 1; i < allContainers.length; i++) {
                                allContainers[i].dataset.index = parseInt(allContainers[i].dataset.index) + 1;
                            }
                            // Insert the cloned item after the original
                            itemContainer.parentElement.insertBefore(clonedContainer, itemContainer.nextSibling);
                            updatePreview('form');
                            saveToHistory();
                            showNotification('Bloc dupliqué avec succès.', 'success');
                        }
                        return;
                    }

                    // Handle move up button
                    const moveUpBtn = target.closest('.move-up-btn');
                    if (moveUpBtn) {
                        const itemContainer = moveUpBtn.closest('.dynamic-item-container');
                        if (itemContainer) {
                            const prevItem = itemContainer.previousElementSibling;
                            if (prevItem && prevItem.classList.contains('dynamic-item-container')) {
                                itemContainer.parentElement.insertBefore(itemContainer, prevItem);
                                // Update indices
                                updateItemIndices(itemContainer.parentElement);
                                updatePreview('form');
                                saveToHistory();
                                showNotification('Bloc déplacé vers le haut.', 'success');
                            }
                        }
                        return;
                    }

                    // Handle move down button
                    const moveDownBtn = target.closest('.move-down-btn');
                    if (moveDownBtn) {
                        const itemContainer = moveDownBtn.closest('.dynamic-item-container');
                        if (itemContainer) {
                            const nextItem = itemContainer.nextElementSibling;
                            if (nextItem && nextItem.classList.contains('dynamic-item-container')) {
                                itemContainer.parentElement.insertBefore(nextItem, itemContainer);
                                // Update indices
                                updateItemIndices(itemContainer.parentElement);
                                updatePreview('form');
                                saveToHistory();
                                showNotification('Bloc déplacé vers le bas.', 'success');
                            }
                        }
                        return;
                    }

                    const removeSectionBtn = target.closest('.remove-section-btn');
                    if (removeSectionBtn) {
                        const sectionDiv = removeSectionBtn.closest('[data-section-id]');
                        const sectionId = sectionDiv.dataset.sectionId;
                        sectionDiv.remove();
                        const previewModule = document.getElementById(sectionId);
                        if(previewModule) previewModule.remove();
                        return;
                    }
                    
                    const layoutBtn = target.closest('.layout-btn');
                    if (layoutBtn) {
                        const layout = layoutBtn.dataset.layout;
                        document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
                        layoutBtn.classList.add('active');
                        document.querySelectorAll('.cv-body-container').forEach(container => {
                           container.className = `cv-body-container ${layout}`;
                           if (layout === 'layout-1-col') {
                               const col2 = container.querySelector('.cv-column:nth-child(2)');
                               const col1 = container.querySelector('.cv-column:nth-child(1)');
                               if (col2 && col1) Array.from(col2.children).forEach(module => col1.appendChild(module));
                           }
                           container.style.gridTemplateColumns = '';
                        });
                        setupAllResizers();
                        checkAllPagesOverflow();
                        return;
                    }

                    const titleStyleBtn = target.closest('.section-title-style-btn');
                    if (titleStyleBtn) {
                        document.querySelectorAll('.section-title-style-btn').forEach(b => b.classList.remove('active'));
                        titleStyleBtn.classList.add('active');
                        updateAllStyles();
                        return;
                    }
                    
                    const themeBtn = target.closest('.theme-btn');
                    if (themeBtn) {
                        applyTheme(themeBtn.dataset.theme);
                        return;
                    }

                    const logoSizeBtn = target.closest('.logo-size-btn');
                    if (logoSizeBtn) {
                        document.querySelectorAll('.logo-size-btn').forEach(b => b.classList.remove('active'));
                        logoSizeBtn.classList.add('active');
                        preview.bannerImg.className = `logo-${logoSizeBtn.dataset.logoSize}`;
                        return;
                    }

                    const skillStyleBtn = target.closest('.skill-style-btn');
                    if (skillStyleBtn) {
                        document.querySelectorAll('.skill-style-btn').forEach(b => b.classList.remove('active'));
                        skillStyleBtn.classList.add('active');
                        const style = skillStyleBtn.dataset.skillStyle;
                        controls.skillsTextControls.classList.toggle('hidden', style === 'levels');
                        controls.skillsLevelControls.classList.toggle('hidden', style !== 'levels');
                        if (style === 'levels') {
                            populateLevelsFromText();
                        }
                        updatePreview('form');
                        return;
                    }
                    
                    const gaugeStyleBtn = target.closest('.gauge-style-btn');
                    if (gaugeStyleBtn) {
                        document.querySelectorAll('.gauge-style-btn').forEach(b => b.classList.remove('active'));
                        gaugeStyleBtn.classList.add('active');
                        updatePreview('form');
                        return;
                    }

                    const styleToggleBtn = target.closest('.style-toggle-btn');
                    if (styleToggleBtn) {
                        styleToggleBtn.classList.toggle('active');
                        updatePreview('form');
                        return;
                    }

                    // Event listeners pour les nouveaux boutons de styles avancés
                    const columnStyleBtn = target.closest('.column-style-btn');
                    if (columnStyleBtn) {
                        document.querySelectorAll('.column-style-btn').forEach(b => b.classList.remove('active'));
                        columnStyleBtn.classList.add('active');
                        const style = columnStyleBtn.dataset.columnStyle;
                        document.querySelectorAll('.cv-body-container').forEach(container => {
                            container.className = container.className.replace(/column-style-\w+/g, '');
                            if (style !== 'normal') {
                                container.classList.add(`column-style-${style}`);
                            }
                        });
                        updatePreview('form');
                        return;
                    }

                    const bgStyleBtn = target.closest('.bg-style-btn');
                    if (bgStyleBtn) {
                        document.querySelectorAll('.bg-style-btn').forEach(b => b.classList.remove('active'));
                        bgStyleBtn.classList.add('active');
                        const style = bgStyleBtn.dataset.bgStyle;
                        document.querySelectorAll('.cv-page').forEach(page => {
                            page.className = page.className.replace(/bg-style-\w+/g, '');
                            if (style !== 'normal') {
                                page.classList.add(`bg-style-${style}`);
                            }
                        });
                        updatePreview('form');
                        return;
                    }

                    const separatorBtn = target.closest('.separator-btn');
                    if (separatorBtn) {
                        document.querySelectorAll('.separator-btn').forEach(b => b.classList.remove('active'));
                        separatorBtn.classList.add('active');
                        const style = separatorBtn.dataset.separator;
                        document.documentElement.style.setProperty('--separator-style', style);
                        updatePreview('form');
                        return;
                    }

                    const animationBtn = target.closest('.animation-btn');
                    if (animationBtn) {
                        document.querySelectorAll('.animation-btn').forEach(b => b.classList.remove('active'));
                        animationBtn.classList.add('active');
                        const animation = animationBtn.dataset.animation;
                        document.querySelectorAll('.cv-page').forEach(page => {
                            page.className = page.className.replace(/animation-\w+/g, '');
                            if (animation !== 'none') {
                                page.classList.add(`animation-${animation}`);
                            }
                        });
                        updatePreview('form');
                        return;
                    }
                });

                Object.values(sliders).forEach(config => {
                    config.el.addEventListener('input', () => {
                        config.valueEl.textContent = config.el.value;
                        root.style.setProperty(config.property, `${config.el.value}${config.unit}`);
                        checkAllPagesOverflow();
                    });
                });
                
                controls.analyzeBtn.addEventListener('click', async () => {
                    const text = controls.aiInput.value;
                    if (!text) { showNotification("Veuillez coller du texte à analyser.", "error"); return; }
                    const schema = {
                        type: "OBJECT",
                        properties: {
                            nom: { type: "STRING" }, prenom: { type: "STRING" }, poste: { type: "STRING" }, description: { type: "STRING" },
                            experiences: { type: "ARRAY", items: { type: "OBJECT", properties: { title: { type: "STRING" }, meta: { type: "STRING" }, desc: { type: "STRING" } } } },
                            formations: { type: "ARRAY", items: { type: "OBJECT", properties: { title: { type: "STRING" }, meta: { type: "STRING" } } } },
                            competences: { type: "STRING" }
                        }
                    };
                    const prompt = `Analyse le texte suivant et extrais les informations pour un CV. Formate la sortie en JSON respectant ce schéma. Sois concis. Texte : """${text}"""`;
                    
                    const extractedData = await callAIAPI(prompt, schema);
                    
                    if (extractedData) {
                        controls.nom.value = extractedData.nom || '';
                        controls.prenom.value = extractedData.prenom || '';
                        controls.poste.value = extractedData.poste || '';
                        controls.description.value = extractedData.description || '';
                        controls.competences.value = extractedData.competences || '';
                        
                        controls.experienceList.innerHTML = '';
                        (extractedData.experiences || []).forEach(exp => createDynamicItem(controls.experienceList, [{ key: 'title', placeholder: 'Titre du poste' }, { key: 'meta', placeholder: 'Entreprise & Dates' }, { key: 'desc', placeholder: 'Description', type: 'textarea' }], exp));
                        
                        controls.formationList.innerHTML = '';
                        (extractedData.formations || []).forEach(form => createDynamicItem(controls.formationList, [{ key: 'title', placeholder: 'Nom du diplôme' }, { key: 'meta', placeholder: 'Établissement & Année' }], form));

                        updatePreview('form');
                        showNotification("CV rempli par l'IA !", "success");
                    }
                });
                
                controls.generateMailBtn.addEventListener('click', async () => {
                    const nomCandidat = `${controls.prenom.value} ${controls.nom.value}`.trim();
                    const posteCandidat = controls.poste.value;
                    const dispoCandidat = controls.qualificationDispo.value;
                    const salaireCandidat = controls.qualificationSalaire.value;
                    const profilCandidat = controls.description.value;
                    const nomRecruteur = controls.bannerNom.value || "votre consultant";
                    const posteRecruteur = controls.bannerPoste.value || "cabinet de recrutement";

                    if (!nomCandidat || !posteCandidat) {
                        showNotification("Veuillez renseigner au moins le nom, prénom et poste du candidat.", "error");
                        return;
                    }

                    const prompt = `En tant que consultant en recrutement pour un cabinet, rédige un e-mail de vente percutant destiné à un client pour lui présenter un excellent candidat.
                    
                    **Ton Persona:** Tu es ${nomRecruteur}, ${posteRecruteur}. Tu es proactif, professionnel et tu connais bien ton marché.
                    **Objectif:** Convaincre le client de l'adéquation du profil avec ses besoins potentiels et l'inciter à en savoir plus.
                    
                    **Informations sur le candidat à intégrer:**
                    - Nom du candidat: ${nomCandidat}
                    - Poste ciblé: ${posteCandidat}
                    - Disponibilité: ${dispoCandidat || 'à discuter'}
                    - Prétentions salariales: ${salaireCandidat || 'à discuter'}
                    - Résumé du profil: "${profilCandidat}"

                    **Structure de l'e-mail:**
                    1.  **Objet accrocheur:** Ex: "Profil - [Poste du candidat]" ou "Opportunité: Un [Poste du candidat] pour vos équipes".
                    2.  **Introduction:** Commence par une formule de politesse professionnelle (ex: "Bonjour,"). Mentionne que tu le contactes pour lui présenter un profil qui pourrait l'intéresser.
                    3.  **Présentation du profil:** Met en avant les points forts du candidat en te basant sur son résumé. Sois concis et impactant. Mentionne le poste, et éventuellement une ou deux compétences clés si elles sont évidentes.
                    4.  **Informations pratiques:** Indique sa disponibilité et ses prétentions salariales de manière professionnelle.
                    5.  **Call to action:** Propose d'envoyer le CV complet et/ou de planifier un bref appel pour discuter plus en détail du profil.
                    6.  **Conclusion:** Termine par une formule de politesse et ta signature (${nomRecruteur}).

                    **Important:** Ne retourne QUE le texte de l'e-mail (objet inclus, sous la forme "Objet: ..."), sans aucune phrase d'introduction ou de conclusion de ta part. Le ton doit être celui d'un partenaire commercial, pas celui du candidat.`;

                    const mailContent = await callAIAPI(prompt);
                    if (mailContent) {
                        controls.recruiterMailContent.value = mailContent;
                        showNotification("E-mail de présentation client généré.", "success");
                    }
                });

                controls.downloadPdfBtn.addEventListener('click', async () => {
                    const filename = `CV_${controls.prenom.value}_${controls.nom.value}.pdf`.replace(/ /g, '_');
                    document.body.classList.add('presentation-mode');

                    const bannerImg = preview.bannerImg;
                    const bannerBg = preview.bannerBgImg;
                    const originalBannerImg = { src: bannerImg.src, style: bannerImg.style.cssText };
                    const originalBannerBg = { src: bannerBg.src, style: bannerBg.style.cssText };

                    const processImage = async (imgElement, isCircle = false) => {
                        if (!imgElement.src || imgElement.src.startsWith('https://placehold.co')) return;

                        const img = new Image();
                        img.crossOrigin = "anonymous";
                        
                        const promise = new Promise((resolve) => {
                            img.onload = () => {
                                const canvas = document.createElement('canvas');
                                const ctx = canvas.getContext('2d');
                                const size = Math.min(img.naturalWidth, img.naturalHeight);
                                canvas.width = isCircle ? size : img.naturalWidth;
                                canvas.height = isCircle ? size : img.naturalHeight;

                                if (isCircle) {
                                    ctx.beginPath();
                                    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
                                    ctx.clip();
                                }
                                
                                const hRatio = canvas.width / img.naturalWidth;
                                const vRatio = canvas.height / img.naturalHeight;
                                const ratio = Math.max(hRatio, vRatio);
                                const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
                                const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;
                                
                                const opacity = imgElement.style.opacity || '1';
                                const filter = imgElement.style.filter || 'none';
                                ctx.globalAlpha = parseFloat(opacity);
                                ctx.filter = filter;
                                
                                ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, centerShift_x, centerShift_y, img.naturalWidth * ratio, img.naturalHeight * ratio);

                                imgElement.src = canvas.toDataURL('image/png');
                                imgElement.style.borderRadius = '0';
                                imgElement.style.objectFit = 'contain';
                                imgElement.style.filter = 'none';
                                imgElement.style.opacity = '1';
                                resolve();
                            };
                            img.onerror = () => {
                                console.error("Could not load image for PDF processing:", imgElement.src);
                                resolve(); // Resolve anyway to not block PDF generation
                            };
                        });
                        img.src = imgElement.src;
                        return promise;
                    };
                    
                    await processImage(bannerImg, true);
                    await processImage(bannerBg, false);

                    const opt = {
                        margin: 0,
                        filename: filename,
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2, useCORS: true, logging: false },
                        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
                    };

                    html2pdf().from(preview.previewWrapper).set(opt).save().finally(() => {
                        bannerImg.src = originalBannerImg.src;
                        bannerImg.style.cssText = originalBannerImg.style;
                        bannerBg.src = originalBannerBg.src;
                        bannerBg.style.cssText = originalBannerBg.style;
                        document.body.classList.remove('presentation-mode');
                    });
                });

                controls.resetCvBtn.addEventListener('click', async () => {
                    const confirmed = await showConfirmModal("Nouveau CV", "Êtes-vous sûr de vouloir réinitialiser complètement le CV ?");
                    if (confirmed) resetCVToDefault();
                });
                
                controls.togglePresentationModeBtn.addEventListener('click', () => {
                    document.body.classList.toggle('presentation-mode');
                    const isActive = document.body.classList.contains('presentation-mode');
                    controls.togglePresentationModeBtn.innerHTML = `<i class="fa-solid ${isActive ? 'fa-eye-slash' : 'fa-eye'}"></i> ${isActive ? 'Quitter Présentation' : 'Mode Présentation'}`;
                });
                
                controls.toggleOverflowBtn.addEventListener('click', (e) => {
                    document.body.classList.toggle('overflow-check-active');
                    e.currentTarget.classList.toggle('active');
                    checkAllPagesOverflow();
                });

                controls.aiSummarizeBtn.addEventListener('click', summarizeAllExperiencesAI);
                controls.aiSynthesizeSkillsBtn.addEventListener('click', synthesizeSkillsWithAI);
                controls.aiLimitSkillsBtn.addEventListener('click', limitSkillsWithAI);
                controls.anonymizeBtn.addEventListener('click', anonymizeCV);
                controls.resetRecruiterBtn.addEventListener('click', () => { setDefaultRecruiterInfo(); updatePreview('form'); });
                controls.addPageBtn.addEventListener('click', () => addNewPage());
                controls.removeBannerBgBtn.addEventListener('click', () => {
                    if (confirm('Êtes-vous sûr de vouloir supprimer l\'image de fond de la bannière ?')) {
                        removeBannerBackground();
                        showNotification('Image de fond supprimée.', 'success');
                    }
                });
                // === AJOUT DES EVENT LISTENERS MANQUANTS ===

                // Event listeners pour la barre d'outils
                document.getElementById('api-settings-btn')?.addEventListener('click', openAPISettings);
                document.getElementById('accessibility-btn')?.addEventListener('click', improveAccessibility);
                document.getElementById('save-cv-btn')?.addEventListener('click', saveCVWithConfirmation);
                document.getElementById('save-settings-btn')?.addEventListener('click', saveAllSettings);
                document.getElementById('load-settings-btn')?.addEventListener('click', loadAllSettings);
                document.getElementById('save-banner-settings-btn')?.addEventListener('click', saveBannerSettings);
                document.getElementById('load-banner-settings-btn')?.addEventListener('click', loadBannerSettings);
                document.getElementById('load-cv-btn')?.addEventListener('click', loadCV);
                document.getElementById('templates-btn')?.addEventListener('click', openTemplates);
                document.getElementById('download-pdf-btn')?.addEventListener('click', downloadPDF);
                document.getElementById('share-btn')?.addEventListener('click', shareCV);
                document.getElementById('reset-cv-btn')?.addEventListener('click', () => {
                    if (confirm('Êtes-vous sûr de vouloir réinitialiser le CV ?')) {
                        resetCVToDefault();
                    }
                });
                document.getElementById('toggle-overflow-btn')?.addEventListener('click', toggleOverflow);
                document.getElementById('toggle-presentation-mode-btn')?.addEventListener('click', togglePresentationMode);
                document.getElementById('collapse-all-sections-btn')?.addEventListener('click', collapseAllSections);

                // Event listeners pour l'analyse IA
                document.getElementById('analyze-btn')?.addEventListener('click', analyzeText);
                document.getElementById('generate-mail-btn')?.addEventListener('click', generateMail);
                document.getElementById('ai-summarize-btn')?.addEventListener('click', summarizeAllExperiencesAI);

                // Event listeners pour les boutons IA du profil
                document.getElementById('ai-rewrite-profile')?.addEventListener('click', rewriteProfile);
                document.getElementById('ai-optimize-profile')?.addEventListener('click', optimizeProfile);

                // Event listeners pour les boutons de gestion des compétences
                document.getElementById('ai-categorize-skills')?.addEventListener('click', categorizeSkills);
                document.getElementById('ai-suggest-skills')?.addEventListener('click', suggestSkills);

                // === CORRECTION DES EVENT LISTENERS AVEC LES BONS IDs ===

                // Event listeners pour les boutons de couleurs et bannière
                document.getElementById('suggest-colors')?.addEventListener('click', suggestColors);
                document.getElementById('randomize-banner-style-btn')?.addEventListener('click', randomizeBannerStyle);

                // Event listeners pour les boutons de templates
                document.getElementById('save-template-btn')?.addEventListener('click', saveTemplateWithConfirmation);
                document.getElementById('export-templates-btn')?.addEventListener('click', exportTemplate);
                document.getElementById('import-templates-btn')?.addEventListener('click', importTemplate);

                // Event listeners pour la gestion des photos
                document.getElementById('upload-photo')?.addEventListener('click', handleProfilePhoto);
                document.getElementById('remove-photo')?.addEventListener('click', removeProfilePhoto);

                // Event listeners pour les paramètres API
                document.getElementById('save-api-settings')?.addEventListener('click', saveAPISettings);

                // Event listeners pour les autres contrôles
                document.getElementById('toggle-dark-mode')?.addEventListener('click', toggleDarkMode);
                document.getElementById('print-cv')?.addEventListener('click', printCV);

                // Event listeners pour les modales
                document.querySelectorAll('.modal-close').forEach(btn => {
                    btn.addEventListener('click', () => {
                        btn.closest('.modal').classList.remove('active');
                    });
                });

                // Event listeners pour ouvrir les modales
                document.getElementById('open-templates')?.addEventListener('click', openTemplates);
                document.getElementById('open-api-settings')?.addEventListener('click', openAPISettings);

                // Event listeners pour les boutons de basculement de sections
                document.querySelectorAll('.toggle-section').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const sectionId = e.target.dataset.section;
                        toggleSection(sectionId);
                    });
                });

                // Event listeners pour les boutons d'ajout d'éléments dynamiques
                document.getElementById('add-experience')?.addEventListener('click', addExperience);
                document.getElementById('add-formation')?.addEventListener('click', addFormation);
                document.getElementById('add-language')?.addEventListener('click', addLanguage);
                document.getElementById('add-project')?.addEventListener('click', addProject);
                document.getElementById('add-certification')?.addEventListener('click', addCertification);
                document.getElementById('add-reference')?.addEventListener('click', addReference);
                document.getElementById('add-social-link')?.addEventListener('click', addSocialLink);

                // === NOUVEAUX EVENT LISTENERS POUR L'ALIGNEMENT DE LA BANNIÈRE ===
                document.querySelectorAll('.banner-align-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        // Retirer la classe active de tous les boutons d'alignement
                        document.querySelectorAll('.banner-align-btn').forEach(b => b.classList.remove('active'));
                        // Ajouter la classe active au bouton cliqué
                        e.target.classList.add('active');

                        // Appliquer l'alignement à la bannière
                        const alignment = e.target.dataset.bannerAlign;
                        const banner = document.getElementById('recruiter-banner');
                        if (banner) {
                            // Retirer toutes les classes d'alignement
                            banner.classList.remove('banner-align-left', 'banner-align-center', 'banner-align-right');
                            // Ajouter la nouvelle classe d'alignement
                            banner.classList.add(`banner-align-${alignment}`);
                            updatePreview('banner');
                        }
                    });
                });

                // Event listener pour le bouton d'inversion logo/texte
                document.getElementById('banner-invert-btn')?.addEventListener('click', () => {
                    const banner = document.getElementById('recruiter-banner');
                    if (banner) {
                        banner.classList.toggle('banner-inverted');
                        updatePreview('banner');
                    }
                });

                // Event listeners pour les boutons de taille de logo
                document.querySelectorAll('.logo-size-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        // Retirer la classe active de tous les boutons de taille
                        document.querySelectorAll('.logo-size-btn').forEach(b => b.classList.remove('active'));
                        // Ajouter la classe active au bouton cliqué
                        e.target.classList.add('active');

                        // Appliquer la taille du logo
                        const size = e.target.dataset.logoSize;
                        const logoImg = document.getElementById('banner-img-preview');
                        if (logoImg) {
                            // Retirer toutes les classes de taille
                            logoImg.classList.remove('logo-sm', 'logo-md', 'logo-lg', 'logo-xl', 'logo-xxl');
                            // Ajouter la nouvelle classe de taille
                            logoImg.classList.add(`logo-${size}`);
                            updatePreview('banner');
                        }
                    });
                });

                document.querySelectorAll('.a4-page').forEach(setupOverflowObserver);
            }

            // --- TOOLBAR AND ACCESSIBILITY FUNCTIONALITY ---

            // Generate share link functionality
            function generateShareLink() {
                // Create a data URL with the current CV data
                const cvData = {
                    nom: controls.nom.value,
                    prenom: controls.prenom.value,
                    poste: controls.poste.value,
                    description: controls.description.value,
                    // Add more data as needed
                    timestamp: Date.now()
                };

                // Encode the data
                const encodedData = btoa(JSON.stringify(cvData));
                const shareUrl = `${window.location.origin}${window.location.pathname}?shared=${encodedData}`;

                controls.shareLinkInput.value = shareUrl;
            }

            // Copy share link to clipboard
            function copyShareLink() {
                controls.shareLinkInput.select();
                document.execCommand('copy');
                showNotification('Lien de partage copié dans le presse-papiers !', 'success');
            }

            // Share modal event listeners
            controls.closeShareModal.addEventListener('click', () => {
                controls.shareModal.classList.remove('active');
            });

            controls.copyShareLinkBtn.addEventListener('click', copyShareLink);

            // Close share modal when clicking outside
            controls.shareModal.addEventListener('click', (e) => {
                if (e.target === controls.shareModal) {
                    controls.shareModal.classList.remove('active');
                }
            });

            // Toolbar button event listeners
            const toolbarButtons = {
                accessibilityBtn: document.getElementById('accessibility-btn'),
                shareBtn: document.getElementById('share-btn'),
                downloadPdfBtn: document.getElementById('download-pdf-btn'),
                anonymizeBtn: document.getElementById('anonymize-btn'),
                resetCvBtn: document.getElementById('reset-cv-btn'),
                toggleOverflowBtn: document.getElementById('toggle-overflow-btn'),
                togglePresentationModeBtn: document.getElementById('toggle-presentation-mode-btn')
            };

            // Accessibility modal elements
            const accessibilityModal = {
                overlay: document.getElementById('accessibility-modal'),
                closeBtn: document.getElementById('close-accessibility-modal'),
                closeBottomBtn: document.getElementById('close-accessibility-modal-bottom'),
                saveBtn: document.getElementById('save-accessibility-settings'),
                resetBtn: document.getElementById('reset-accessibility-settings'),
                contrastLevel: document.getElementById('contrast-level'),
                highContrastMode: document.getElementById('high-contrast-mode'),
                textSizeSlider: document.getElementById('text-size-slider'),
                textSizeValue: document.getElementById('text-size-value'),
                textSizeSmall: document.getElementById('text-size-small'),
                textSizeMedium: document.getElementById('text-size-medium'),
                textSizeLarge: document.getElementById('text-size-large'),
                keyboardNavigation: document.getElementById('keyboard-navigation'),
                focusIndicators: document.getElementById('focus-indicators'),
                skipLinks: document.getElementById('skip-links'),
                reduceAnimations: document.getElementById('reduce-animations'),
                disableAnimations: document.getElementById('disable-animations'),
                screenReader: document.getElementById('screen-reader'),
                largeClickTargets: document.getElementById('large-click-targets')
            };

            // Accessibility settings storage
            let accessibilitySettings = {
                contrastLevel: 'normal',
                highContrastMode: false,
                textSize: 100,
                keyboardNavigation: false,
                focusIndicators: false,
                skipLinks: false,
                reduceAnimations: false,
                disableAnimations: false,
                screenReader: false,
                largeClickTargets: false
            };

            // Load accessibility settings from localStorage
            function loadAccessibilitySettings() {
                const saved = localStorage.getItem('cv-accessibility-settings');
                if (saved) {
                    accessibilitySettings = { ...accessibilitySettings, ...JSON.parse(saved) };
                }
                applyAccessibilitySettings();
            }

            // Save accessibility settings to localStorage
            function saveAccessibilitySettings() {
                localStorage.setItem('cv-accessibility-settings', JSON.stringify(accessibilitySettings));
                showNotification('Paramètres d\'accessibilité sauvegardés.', 'success');
            }

            // Apply accessibility settings
            function applyAccessibilitySettings() {
                const body = document.body;

                // Remove all accessibility classes first
                body.classList.remove('accessibility-high-contrast', 'accessibility-large-text', 'accessibility-keyboard-nav', 'accessibility-focus-visible', 'accessibility-reduced-motion', 'accessibility-no-animations', 'accessibility-large-targets');

                // Apply contrast settings
                if (accessibilitySettings.highContrastMode) {
                    body.classList.add('accessibility-high-contrast');
                }

                // Apply text size settings
                if (accessibilitySettings.textSize !== 100) {
                    body.classList.add('accessibility-large-text');
                    document.documentElement.style.fontSize = accessibilitySettings.textSize + '%';
                } else {
                    document.documentElement.style.fontSize = '';
                }

                // Apply keyboard navigation settings
                if (accessibilitySettings.keyboardNavigation) {
                    body.classList.add('accessibility-keyboard-nav');
                }

                // Apply focus indicators
                if (accessibilitySettings.focusIndicators) {
                    body.classList.add('accessibility-focus-visible');
                }

                // Apply animation settings
                if (accessibilitySettings.disableAnimations) {
                    body.classList.add('accessibility-no-animations');
                } else if (accessibilitySettings.reduceAnimations) {
                    body.classList.add('accessibility-reduced-motion');
                }

                // Apply large click targets
                if (accessibilitySettings.largeClickTargets) {
                    body.classList.add('accessibility-large-targets');
                }

                // Handle skip links
                const existingSkipLink = document.querySelector('.accessibility-skip-links');
                if (accessibilitySettings.skipLinks) {
                    if (!existingSkipLink) {
                        const skipLink = document.createElement('a');
                        skipLink.href = '#main-content';
                        skipLink.className = 'accessibility-skip-links';
                        skipLink.textContent = 'Aller au contenu principal';
                        document.body.insertBefore(skipLink, document.body.firstChild);
                    }
                } else if (existingSkipLink) {
                    existingSkipLink.remove();
                }
            }

            // Reset accessibility settings
            function resetAccessibilitySettings() {
                accessibilitySettings = {
                    contrastLevel: 'normal',
                    highContrastMode: false,
                    textSize: 100,
                    keyboardNavigation: false,
                    focusIndicators: false,
                    skipLinks: false,
                    reduceAnimations: false,
                    disableAnimations: false,
                    screenReader: false,
                    largeClickTargets: false
                };
                applyAccessibilitySettings();
                updateAccessibilityModal();
                localStorage.removeItem('cv-accessibility-settings');
                showNotification('Paramètres d\'accessibilité réinitialisés.', 'success');
            }

            // Update modal UI to reflect current settings
            function updateAccessibilityModal() {
                accessibilityModal.contrastLevel.value = accessibilitySettings.contrastLevel;
                accessibilityModal.highContrastMode.checked = accessibilitySettings.highContrastMode;
                accessibilityModal.textSizeSlider.value = accessibilitySettings.textSize;
                accessibilityModal.textSizeValue.textContent = accessibilitySettings.textSize;
                accessibilityModal.keyboardNavigation.checked = accessibilitySettings.keyboardNavigation;
                accessibilityModal.focusIndicators.checked = accessibilitySettings.focusIndicators;
                accessibilityModal.skipLinks.checked = accessibilitySettings.skipLinks;
                accessibilityModal.reduceAnimations.checked = accessibilitySettings.reduceAnimations;
                accessibilityModal.disableAnimations.checked = accessibilitySettings.disableAnimations;
                accessibilityModal.screenReader.checked = accessibilitySettings.screenReader;
                accessibilityModal.largeClickTargets.checked = accessibilitySettings.largeClickTargets;

                // Update text size buttons
                accessibilityModal.textSizeSmall.classList.toggle('bg-purple-600', accessibilitySettings.textSize === 75);
                accessibilityModal.textSizeSmall.classList.toggle('text-white', accessibilitySettings.textSize === 75);
                accessibilityModal.textSizeSmall.classList.toggle('bg-gray-200', accessibilitySettings.textSize !== 75);

                accessibilityModal.textSizeMedium.classList.toggle('bg-purple-600', accessibilitySettings.textSize === 100);
                accessibilityModal.textSizeMedium.classList.toggle('text-white', accessibilitySettings.textSize === 100);
                accessibilityModal.textSizeMedium.classList.toggle('bg-gray-200', accessibilitySettings.textSize !== 100);

                accessibilityModal.textSizeLarge.classList.toggle('bg-purple-600', accessibilitySettings.textSize === 150);
                accessibilityModal.textSizeLarge.classList.toggle('text-white', accessibilitySettings.textSize === 150);
                accessibilityModal.textSizeLarge.classList.toggle('bg-gray-200', accessibilitySettings.textSize !== 150);
            }

            // Toolbar button event listeners
            toolbarButtons.accessibilityBtn.addEventListener('click', () => {
                accessibilityModal.overlay.classList.add('active');
                updateAccessibilityModal();
            });

            toolbarButtons.shareBtn.addEventListener('click', () => {
                controls.shareModal.classList.add('active');
                generateShareLink();
            });

            toolbarButtons.downloadPdfBtn.addEventListener('click', async () => {
                const filename = `CV_${controls.prenom.value}_${controls.nom.value}.pdf`.replace(/ /g, '_');
                document.body.classList.add('presentation-mode');

                const bannerImg = preview.bannerImg;
                const bannerBg = preview.bannerBgImg;
                const originalBannerImg = { src: bannerImg.src, style: bannerImg.style.cssText };
                const originalBannerBg = { src: bannerBg.src, style: bannerBg.style.cssText };

                const processImage = async (imgElement, isCircle = false) => {
                    if (!imgElement.src || imgElement.src.startsWith('https://placehold.co')) return;

                    const img = new Image();
                    img.crossOrigin = "anonymous";

                    const promise = new Promise((resolve) => {
                        img.onload = () => {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            const size = Math.min(img.naturalWidth, img.naturalHeight);
                            canvas.width = isCircle ? size : img.naturalWidth;
                            canvas.height = isCircle ? size : img.naturalHeight;

                            if (isCircle) {
                                ctx.beginPath();
                                ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
                                ctx.clip();
                            }

                            const hRatio = canvas.width / img.naturalWidth;
                            const vRatio = canvas.height / img.naturalHeight;
                            const ratio = Math.max(hRatio, vRatio);
                            const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
                            const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;

                            const opacity = imgElement.style.opacity || '1';
                            const filter = imgElement.style.filter || 'none';
                            ctx.globalAlpha = parseFloat(opacity);
                            ctx.filter = filter;

                            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, centerShift_x, centerShift_y, img.naturalWidth * ratio, img.naturalHeight * ratio);

                            imgElement.src = canvas.toDataURL('image/png');
                            imgElement.style.borderRadius = '0';
                            imgElement.style.objectFit = 'contain';
                            imgElement.style.filter = 'none';
                            imgElement.style.opacity = '1';
                            resolve();
                        };
                        img.onerror = () => {
                            console.error("Could not load image for PDF processing:", imgElement.src);
                            resolve(); // Resolve anyway to not block PDF generation
                        };
                    });
                    img.src = imgElement.src;
                    return promise;
                };

                await processImage(bannerImg, true);
                await processImage(bannerBg, false);

                const opt = {
                    margin: 0,
                    filename: filename,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true, logging: false },
                    jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
                };

                html2pdf().from(preview.previewWrapper).set(opt).save().finally(() => {
                    bannerImg.src = originalBannerImg.src;
                    bannerImg.style.cssText = originalBannerImg.style;
                    bannerBg.src = originalBannerBg.src;
                    bannerBg.style.cssText = originalBannerBg.style;
                    document.body.classList.remove('presentation-mode');
                });
            });

            toolbarButtons.anonymizeBtn.addEventListener('click', anonymizeCV);

            toolbarButtons.resetCvBtn.addEventListener('click', async () => {
                const confirmed = await showConfirmModal("Nouveau CV", "Êtes-vous sûr de vouloir réinitialiser complètement le CV ?");
                if (confirmed) resetCVToDefault();
            });

            toolbarButtons.toggleOverflowBtn.addEventListener('click', (e) => {
                document.body.classList.toggle('overflow-check-active');
                e.currentTarget.classList.toggle('active');
                checkAllPagesOverflow();
            });

            toolbarButtons.togglePresentationModeBtn.addEventListener('click', () => {
                document.body.classList.toggle('presentation-mode');
                const isActive = document.body.classList.contains('presentation-mode');
                toolbarButtons.togglePresentationModeBtn.innerHTML = `<i class="fa-solid ${isActive ? 'fa-eye-slash' : 'fa-eye'}"></i> ${isActive ? 'Quitter Présentation' : 'MODE PRÉSENTATION'}`;
            });

            // Accessibility modal event listeners
            accessibilityModal.closeBtn.addEventListener('click', () => {
                accessibilityModal.overlay.classList.remove('active');
            });

            accessibilityModal.closeBottomBtn.addEventListener('click', () => {
                accessibilityModal.overlay.classList.remove('active');
            });

            accessibilityModal.saveBtn.addEventListener('click', () => {
                saveAccessibilitySettings();
                accessibilityModal.overlay.classList.remove('active');
            });

            accessibilityModal.resetBtn.addEventListener('click', () => {
                resetAccessibilitySettings();
            });

            // Contrast settings
            accessibilityModal.contrastLevel.addEventListener('change', (e) => {
                accessibilitySettings.contrastLevel = e.target.value;
                applyAccessibilitySettings();
            });

            accessibilityModal.highContrastMode.addEventListener('change', (e) => {
                accessibilitySettings.highContrastMode = e.target.checked;
                applyAccessibilitySettings();
            });

            // Text size settings
            accessibilityModal.textSizeSlider.addEventListener('input', (e) => {
                accessibilitySettings.textSize = parseInt(e.target.value);
                accessibilityModal.textSizeValue.textContent = accessibilitySettings.textSize;
                applyAccessibilitySettings();
            });

            accessibilityModal.textSizeSmall.addEventListener('click', () => {
                accessibilitySettings.textSize = 75;
                updateAccessibilityModal();
                applyAccessibilitySettings();
            });

            accessibilityModal.textSizeMedium.addEventListener('click', () => {
                accessibilitySettings.textSize = 100;
                updateAccessibilityModal();
                applyAccessibilitySettings();
            });

            accessibilityModal.textSizeLarge.addEventListener('click', () => {
                accessibilitySettings.textSize = 150;
                updateAccessibilityModal();
                applyAccessibilitySettings();
            });

            // Navigation settings
            accessibilityModal.keyboardNavigation.addEventListener('change', (e) => {
                accessibilitySettings.keyboardNavigation = e.target.checked;
                applyAccessibilitySettings();
            });

            accessibilityModal.focusIndicators.addEventListener('change', (e) => {
                accessibilitySettings.focusIndicators = e.target.checked;
                applyAccessibilitySettings();
            });

            accessibilityModal.skipLinks.addEventListener('change', (e) => {
                accessibilitySettings.skipLinks = e.target.checked;
                applyAccessibilitySettings();
            });

            // Animation settings
            accessibilityModal.reduceAnimations.addEventListener('change', (e) => {
                accessibilitySettings.reduceAnimations = e.target.checked;
                if (e.target.checked) {
                    accessibilitySettings.disableAnimations = false;
                    accessibilityModal.disableAnimations.checked = false;
                }
                applyAccessibilitySettings();
            });

            accessibilityModal.disableAnimations.addEventListener('change', (e) => {
                accessibilitySettings.disableAnimations = e.target.checked;
                if (e.target.checked) {
                    accessibilitySettings.reduceAnimations = false;
                    accessibilityModal.reduceAnimations.checked = false;
                }
                applyAccessibilitySettings();
            });

            // Additional features
            accessibilityModal.screenReader.addEventListener('change', (e) => {
                accessibilitySettings.screenReader = e.target.checked;
                applyAccessibilitySettings();
            });

            accessibilityModal.largeClickTargets.addEventListener('change', (e) => {
                accessibilitySettings.largeClickTargets = e.target.checked;
                applyAccessibilitySettings();
            });

            // Close modal when clicking outside
            accessibilityModal.overlay.addEventListener('click', (e) => {
                if (e.target === accessibilityModal.overlay) {
                    accessibilityModal.overlay.classList.remove('active');
                }
            });

            // Load accessibility settings on page load
            loadAccessibilitySettings();

            // --- ADVANCED LAYOUT CONTROLS ---
            if (controls.pageMarginSlider) {
                controls.pageMarginSlider.addEventListener('input', (e) => {
                    const value = parseFloat(e.target.value);
                    controls.pageMarginValue.textContent = value;
                    document.documentElement.style.setProperty('--page-margin', value + 'cm');
                    saveToHistory();
                });
            }

            if (controls.pagePaddingSlider) {
                controls.pagePaddingSlider.addEventListener('input', (e) => {
                    const value = parseFloat(e.target.value);
                    controls.pagePaddingValue.textContent = value;
                    // This would need to be applied to page containers
                    document.querySelectorAll('.a4-page').forEach(page => {
                        page.style.paddingLeft = value + 'cm';
                        page.style.paddingRight = value + 'cm';
                    });
                    saveToHistory();
                });
            }

            if (controls.moduleSpacingSlider) {
                controls.moduleSpacingSlider.addEventListener('input', (e) => {
                    const value = parseFloat(e.target.value);
                    controls.moduleSpacingValue.textContent = value;
                    document.documentElement.style.setProperty('--module-spacing', value + 'rem');
                    saveToHistory();
                });
            }

            if (controls.paragraphSpacingSlider) {
                controls.paragraphSpacingSlider.addEventListener('input', (e) => {
                    const value = parseFloat(e.target.value);
                    controls.paragraphSpacingValue.textContent = value;
                    document.documentElement.style.setProperty('--paragraph-spacing', value + 'rem');
                    saveToHistory();
                });
            }

            if (controls.fontSizeH1Slider) {
                controls.fontSizeH1Slider.addEventListener('input', (e) => {
                    const value = parseInt(e.target.value);
                    controls.fontSizeH1Value.textContent = value;
                    document.documentElement.style.setProperty('--font-size-h1', value + 'pt');
                    saveToHistory();
                });
            }

            if (controls.fontSizeH2Slider) {
                controls.fontSizeH2Slider.addEventListener('input', (e) => {
                    const value = parseInt(e.target.value);
                    controls.fontSizeH2Value.textContent = value;
                    document.documentElement.style.setProperty('--font-size-h2', value + 'pt');
                    saveToHistory();
                });
            }

            if (controls.resetLayoutBtn) {
                controls.resetLayoutBtn.addEventListener('click', () => {
                    // Reset to default values
                    if (controls.pageMarginSlider) {
                        controls.pageMarginSlider.value = 2;
                        controls.pageMarginValue.textContent = '2';
                        document.documentElement.style.setProperty('--page-margin', '2cm');
                    }
                    if (controls.pagePaddingSlider) {
                        controls.pagePaddingSlider.value = 2;
                        controls.pagePaddingValue.textContent = '2';
                        document.querySelectorAll('.a4-page').forEach(page => {
                            page.style.paddingLeft = '2cm';
                            page.style.paddingRight = '2cm';
                        });
                    }
                    if (controls.moduleSpacingSlider) {
                        controls.moduleSpacingSlider.value = 1.5;
                        controls.moduleSpacingValue.textContent = '1.5';
                        document.documentElement.style.setProperty('--module-spacing', '1.5rem');
                    }
                    if (controls.paragraphSpacingSlider) {
                        controls.paragraphSpacingSlider.value = 0.5;
                        controls.paragraphSpacingValue.textContent = '0.5';
                        document.documentElement.style.setProperty('--paragraph-spacing', '0.5rem');
                    }
                    if (controls.fontSizeH1Slider) {
                        controls.fontSizeH1Slider.value = 40;
                        controls.fontSizeH1Value.textContent = '40';
                        document.documentElement.style.setProperty('--font-size-h1', '40pt');
                    }
                    if (controls.fontSizeH2Slider) {
                        controls.fontSizeH2Slider.value = 21;
                        controls.fontSizeH2Value.textContent = '21';
                        document.documentElement.style.setProperty('--font-size-h2', '21pt');
                    }
                    saveToHistory();
                    showNotification('Mise en page réinitialisée', 'info');
                });
            }

            if (controls.saveLayoutBtn) {
                controls.saveLayoutBtn.addEventListener('click', () => {
                    const layoutSettings = {
                        pageMargin: controls.pageMarginSlider?.value || 2,
                        pagePadding: controls.pagePaddingSlider?.value || 2,
                        moduleSpacing: controls.moduleSpacingSlider?.value || 1.5,
                        paragraphSpacing: controls.paragraphSpacingSlider?.value || 0.5,
                        fontSizeH1: controls.fontSizeH1Slider?.value || 40,
                        fontSizeH2: controls.fontSizeH2Slider?.value || 21
                    };
                    localStorage.setItem('cv-layout-settings', JSON.stringify(layoutSettings));
                    showNotification('Paramètres de mise en page sauvegardés', 'success');
                });
            }

            // Load saved layout settings
            const savedLayout = localStorage.getItem('cv-layout-settings');
            if (savedLayout) {
                try {
                    const layoutSettings = JSON.parse(savedLayout);
                    if (controls.pageMarginSlider && layoutSettings.pageMargin) {
                        controls.pageMarginSlider.value = layoutSettings.pageMargin;
                        controls.pageMarginValue.textContent = layoutSettings.pageMargin;
                        document.documentElement.style.setProperty('--page-margin', layoutSettings.pageMargin + 'cm');
                    }
                    if (controls.pagePaddingSlider && layoutSettings.pagePadding) {
                        controls.pagePaddingSlider.value = layoutSettings.pagePadding;
                        controls.pagePaddingValue.textContent = layoutSettings.pagePadding;
                        document.querySelectorAll('.a4-page').forEach(page => {
                            page.style.paddingLeft = layoutSettings.pagePadding + 'cm';
                            page.style.paddingRight = layoutSettings.pagePadding + 'cm';
                        });
                    }
                    if (controls.moduleSpacingSlider && layoutSettings.moduleSpacing) {
                        controls.moduleSpacingSlider.value = layoutSettings.moduleSpacing;
                        controls.moduleSpacingValue.textContent = layoutSettings.moduleSpacing;
                        document.documentElement.style.setProperty('--module-spacing', layoutSettings.moduleSpacing + 'rem');
                    }
                    if (controls.paragraphSpacingSlider && layoutSettings.paragraphSpacing) {
                        controls.paragraphSpacingSlider.value = layoutSettings.paragraphSpacing;
                        controls.paragraphSpacingValue.textContent = layoutSettings.paragraphSpacing;
                        document.documentElement.style.setProperty('--paragraph-spacing', layoutSettings.paragraphSpacing + 'rem');
                    }
                    if (controls.fontSizeH1Slider && layoutSettings.fontSizeH1) {
                        controls.fontSizeH1Slider.value = layoutSettings.fontSizeH1;
                        controls.fontSizeH1Value.textContent = layoutSettings.fontSizeH1;
                        document.documentElement.style.setProperty('--font-size-h1', layoutSettings.fontSizeH1 + 'pt');
                    }
                    if (controls.fontSizeH2Slider && layoutSettings.fontSizeH2) {
                        controls.fontSizeH2Slider.value = layoutSettings.fontSizeH2;
                        controls.fontSizeH2Value.textContent = layoutSettings.fontSizeH2;
                        document.documentElement.style.setProperty('--font-size-h2', layoutSettings.fontSizeH2 + 'pt');
                    }
                } catch (e) {
                    console.warn('Erreur lors du chargement des paramètres de mise en page:', e);
                }
            }

            // --- START THE APP ---
            initializeAll();
            resetCVToDefault(); // Start with a clean slate

        // --- ZOOM CONTROLLER ---
        const zoomController = document.createElement('div');
        zoomController.id = 'zoom-controller';
        zoomController.className = 'fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 flex items-center gap-2 z-50 border';
        zoomController.innerHTML = `
            <button id="zoom-out-btn" class="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-sm">-</button>
            <div class="flex items-center gap-2">
                <input type="range" id="zoom-slider" min="50" max="200" value="100" class="w-20">
                <span id="zoom-value" class="text-sm font-medium min-w-[3rem]">100%</span>
            </div>
            <button id="zoom-in-btn" class="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-sm">+</button>
        `;
        document.body.appendChild(zoomController);

        // Zoom functionality
        let currentZoom = 100;
        const zoomSlider = document.getElementById('zoom-slider');
        const zoomValue = document.getElementById('zoom-value');
        const zoomInBtn = document.getElementById('zoom-in-btn');
        const zoomOutBtn = document.getElementById('zoom-out-btn');
        const cvPreviewWrapper = document.getElementById('cv-preview-wrapper');

        function updateZoom(zoomLevel) {
            currentZoom = Math.max(50, Math.min(200, zoomLevel));
            zoomSlider.value = currentZoom;
            zoomValue.textContent = currentZoom + '%';
            cvPreviewWrapper.style.transform = `scale(${currentZoom / 100})`;
            cvPreviewWrapper.style.transformOrigin = 'top center';
        }

        zoomSlider.addEventListener('input', (e) => {
            updateZoom(parseInt(e.target.value));
        });

        zoomInBtn.addEventListener('click', () => {
            updateZoom(currentZoom + 10);
        });

        zoomOutBtn.addEventListener('click', () => {
            updateZoom(currentZoom - 10);
        });

        // --- NEW TOOLBAR FUNCTIONALITY ---

        // Toolbar button selectors
        const newToolbarButtons = {
            saveCvBtn: document.getElementById('save-cv-btn'),
            loadCvBtn: document.getElementById('load-cv-btn'),
            templatesBtn: document.getElementById('templates-btn'),
            apiProviderSelect: document.getElementById('ai-provider-select'),
            apiSettingsBtn: document.getElementById('api-settings-btn'),
            apiStatusIndicator: document.getElementById('api-status-indicator'),
            collapseAllSectionsBtn: document.getElementById('collapse-all-sections-btn')
        };

        // Modal selectors
        const apiSettingsModal = {
            overlay: document.getElementById('api-settings-modal'),
            closeBtn: document.getElementById('close-api-settings-modal'),
            closeBottomBtn: document.getElementById('close-api-settings-modal-bottom'),
            providerSelect: document.getElementById('modal-ai-provider-select'),
            geminiApiKey: document.getElementById('gemini-api-key'),
            chatgptApiKey: document.getElementById('chatgpt-api-key'),
            chatgptModel: document.getElementById('chatgpt-model'),
            testGeminiBtn: document.getElementById('test-gemini-btn'),
            testChatgptBtn: document.getElementById('test-chatgpt-btn'),
            saveBtn: document.getElementById('save-api-settings'),
            clearBtn: document.getElementById('clear-api-keys-btn'),
            apiStatusDisplay: document.getElementById('api-status-display')
        };

        const templatesModal = {
            overlay: document.getElementById('templates-modal'),
            closeBtn: document.getElementById('close-templates-modal'),
            closeBottomBtn: document.getElementById('close-templates-modal-bottom'),
            templateName: document.getElementById('template-name'),
            templateCategory: document.getElementById('template-category'),
            saveTemplateBtn: document.getElementById('save-template-btn'),
            savedTemplatesList: document.getElementById('saved-templates-list'),
            exportTemplatesBtn: document.getElementById('export-templates-btn'),
            importTemplatesBtn: document.getElementById('import-templates-btn'),
            importFileInput: document.getElementById('import-templates-file')
        };

        // API Settings functionality
        let apiSettings = {
            provider: 'gemini',
            gemini: { apiKey: '', isValid: false },
            chatgpt: { apiKey: '', model: 'gpt-3.5-turbo', isValid: false }
        };

        // Load API settings from localStorage
        function loadApiSettings() {
            const saved = localStorage.getItem('cv-api-settings');
            if (saved) {
                apiSettings = { ...apiSettings, ...JSON.parse(saved) };
            }
            updateApiUI();
        }

        // Templates functionality
        let savedTemplates = [];

        // Load templates from localStorage
        function loadTemplates() {
            const saved = localStorage.getItem('cv-templates');
            if (saved) {
                savedTemplates = JSON.parse(saved);
            }
            updateTemplatesList();
        }

        // Save templates to localStorage
        function saveTemplates() {
            localStorage.setItem('cv-templates', JSON.stringify(savedTemplates));
        }

        // Update templates list UI
        function updateTemplatesList() {
            const list = templatesModal.savedTemplatesList;
            list.innerHTML = '';

            if (savedTemplates.length === 0) {
                list.innerHTML = '<p class="text-sm text-gray-500 text-center py-4">Aucun template enregistré</p>';
                return;
            }

            savedTemplates.forEach((template, index) => {
                const templateItem = document.createElement('div');
                templateItem.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-md';
                templateItem.innerHTML = `
                    <div>
                        <h4 class="font-medium">${template.name}</h4>
                        <p class="text-sm text-gray-500">${template.category} • ${new Date(template.date).toLocaleDateString()}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="load-template-btn px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600" data-index="${index}">
                            Charger
                        </button>
                        <button class="delete-template-btn px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600" data-index="${index}">
                            Supprimer
                        </button>
                    </div>
                `;
                list.appendChild(templateItem);
            });

            // Add event listeners for template buttons
            document.querySelectorAll('.load-template-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    loadTemplate(savedTemplates[index]);
                });
            });

            document.querySelectorAll('.delete-template-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    const templateName = savedTemplates[index]?.name || 'Template';
                    if (confirm(`Êtes-vous sûr de vouloir supprimer le template "${templateName}" ?`)) {
                        deleteTemplate(index);
                    }
                });
            });
        }

        // Save current layout as template
        function saveCurrentTemplate() {
            const name = templatesModal.templateName.value.trim();
            if (!name) {
                showNotification('Veuillez entrer un nom pour le template.', 'error');
                return;
            }

            const template = {
                name: name,
                category: templatesModal.templateCategory.value,
                date: new Date().toISOString(),
                // Here you would save the actual layout data
                // For now, we'll save a placeholder
                layoutData: {
                    // Current layout configuration would go here
                }
            };

            savedTemplates.push(template);
            saveTemplates();
            updateTemplatesList();
            templatesModal.templateName.value = '';
            showNotification('Template sauvegardé avec succès !', 'success');
        }

        // Delete a template
        function deleteTemplate(index) {
            savedTemplates.splice(index, 1);
            saveTemplates();
            updateTemplatesList();
            showNotification('Template supprimé.', 'success');
        }

        // Export templates
        function exportTemplates() {
            const dataStr = JSON.stringify(savedTemplates, null, 2);
            const dataBlob = new Blob([dataStr], {type:'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'cv-templates.json';
            link.click();
            URL.revokeObjectURL(url);
            showNotification('Templates exportés avec succès !', 'success');
        }

        // Import templates
        function importTemplates(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedTemplates = JSON.parse(e.target.result);
                    savedTemplates = [...savedTemplates, ...importedTemplates];
                    saveTemplates();
                    updateTemplatesList();
                    showNotification('Templates importés avec succès !', 'success');
                } catch (error) {
                    showNotification('Erreur lors de l\'importation des templates.', 'error');
                }
            };
            reader.readAsText(file);
        }

        // Save/Load CV functionality
        function saveCurrentCV() {
            const cvData = {
                // Here you would collect all CV data
                // For now, we'll save basic info
                nom: controls.nom.value,
                prenom: controls.prenom.value,
                poste: controls.poste.value,
                description: controls.description.value,
                dateSaved: new Date().toISOString()
            };

            localStorage.setItem('cv-autosave', JSON.stringify(cvData));
            showNotification('CV sauvegardé localement !', 'success');
        }

        function loadSavedCV() {
            const savedData = localStorage.getItem('cv-autosave');
            if (!savedData) {
                showNotification('Aucune sauvegarde trouvée.', 'error');
                return;
            }

            try {
                const cvData = JSON.parse(savedData);
                // Here you would apply the loaded data to the form
                controls.nom.value = cvData.nom || '';
                controls.prenom.value = cvData.prenom || '';
                controls.poste.value = cvData.poste || '';
                controls.description.value = cvData.description || '';

                // Trigger update
                updatePreview('form');
                showNotification('CV chargé depuis la sauvegarde locale !', 'success');
            } catch (error) {
                showNotification('Erreur lors du chargement de la sauvegarde.', 'error');
            }
        }

        // Event listeners for new toolbar buttons
        newToolbarButtons.saveCvBtn.addEventListener('click', saveCurrentCV);
        newToolbarButtons.loadCvBtn.addEventListener('click', loadSavedCV);
        newToolbarButtons.templatesBtn.addEventListener('click', () => {
            templatesModal.overlay.classList.add('active');
            loadTemplates();
        });
        newToolbarButtons.apiSettingsBtn.addEventListener('click', () => {
            apiSettingsModal.overlay.classList.add('active');
        });
        newToolbarButtons.collapseAllSectionsBtn.addEventListener('click', collapseAllSections);

        // API provider change
        newToolbarButtons.apiProviderSelect.addEventListener('change', (e) => {
            apiSettings.provider = e.target.value;
            saveApiSettings();
        });

        // API Settings Modal Event Listeners
        apiSettingsModal.closeBtn.addEventListener('click', () => {
            apiSettingsModal.overlay.classList.remove('active');
        });
        apiSettingsModal.closeBottomBtn.addEventListener('click', () => {
            apiSettingsModal.overlay.classList.remove('active');
        });
        apiSettingsModal.saveBtn.addEventListener('click', () => {
            apiSettings.provider = apiSettingsModal.providerSelect.value;
            apiSettings.gemini.apiKey = apiSettingsModal.geminiApiKey.value;
            apiSettings.chatgpt.apiKey = apiSettingsModal.chatgptApiKey.value;
            apiSettings.chatgpt.model = apiSettingsModal.chatgptModel.value;
            saveApiSettings();
            apiSettingsModal.overlay.classList.remove('active');
        });
        apiSettingsModal.clearBtn.addEventListener('click', () => {
            apiSettings.gemini.apiKey = '';
            apiSettings.gemini.isValid = false;
            apiSettings.chatgpt.apiKey = '';
            apiSettings.chatgpt.isValid = false;
            saveApiSettings();
            apiSettingsModal.geminiApiKey.value = '';
            apiSettingsModal.chatgptApiKey.value = '';
            showNotification('Toutes les clés API effacées.', 'success');
        });

        // Load initial data
        loadApiSettings();
        loadTemplates();
        setupPanelResizers();
        apiSettingsModal.testGeminiBtn.addEventListener('click', testGeminiConnection);
        apiSettingsModal.testChatgptBtn.addEventListener('click', testChatGPTConnection);

        // Templates Modal Event Listeners
        templatesModal.closeBtn.addEventListener('click', () => {
            templatesModal.overlay.classList.remove('active');
        });
        templatesModal.closeBottomBtn.addEventListener('click', () => {
            templatesModal.overlay.classList.remove('active');
        });
        templatesModal.saveTemplateBtn.addEventListener('click', saveCurrentTemplate);
        templatesModal.exportTemplatesBtn.addEventListener('click', exportTemplates);
        templatesModal.importTemplatesBtn.addEventListener('click', () => {
            templatesModal.importFileInput.click();
        });
        templatesModal.importFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                importTemplates(file);
            }
        });

        // Save API settings to localStorage
        function saveApiSettings() {
            localStorage.setItem('cv-api-settings', JSON.stringify(apiSettings));
            updateApiUI();
            showNotification('Paramètres API sauvegardés.', 'success');
        }

        // Save banner settings
        function saveBannerSettings() {
            const bannerData = {
                isEnabled: controls.toggleBanner.checked,
                style: controls.bannerStyleSelect.value,
                alignment: document.querySelector('.banner-align-btn.active')?.dataset.bannerAlign || 'left',
                logoSize: document.querySelector('.logo-size-btn.active')?.dataset.logoSize || 'md',
                isInverted: controls.bannerInvertBtn.classList.contains('active'),
                spacing: controls.bannerElementSpacing.value,
                nom: controls.bannerNom.value,
                poste: controls.bannerPoste.value,
                email: controls.bannerEmail.value,
                tel: controls.bannerTel.value,
                bgGrayscale: controls.bannerBgGrayscale.checked,
                timestamp: new Date().toISOString()
            };

            localStorage.setItem('cv-banner-settings', JSON.stringify(bannerData));
            showNotification('Paramètres de bannière sauvegardés.', 'success');
        }

        // Load banner settings
        function loadBannerSettings() {
            const savedData = localStorage.getItem('cv-banner-settings');
            if (!savedData) {
                showNotification('Aucun paramètre de bannière trouvé.', 'info');
                return;
            }

            try {
                const bannerData = JSON.parse(savedData);
                controls.toggleBanner.checked = bannerData.isEnabled || false;
                controls.bannerStyleSelect.value = bannerData.style || 'banner-style-modern';
                controls.bannerElementSpacing.value = bannerData.spacing || 1;
                controls.bannerNom.value = bannerData.nom || '';
                controls.bannerPoste.value = bannerData.poste || '';
                controls.bannerEmail.value = bannerData.email || '';
                controls.bannerTel.value = bannerData.tel || '';
                controls.bannerBgGrayscale.checked = bannerData.bgGrayscale || false;

                // Set active buttons
                document.querySelectorAll('.banner-align-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.bannerAlign === bannerData.alignment);
                });
                document.querySelectorAll('.logo-size-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.logoSize === bannerData.logoSize);
                });
                controls.bannerInvertBtn.classList.toggle('active', bannerData.isInverted || false);

                updatePreview('banner');
                showNotification('Paramètres de bannière chargés.', 'success');
            } catch (error) {
                showNotification('Erreur lors du chargement des paramètres de bannière.', 'error');
            }
        }

        // Save template with confirmation
        function saveTemplateWithConfirmation() {
            const name = templatesModal.templateName.value.trim();
            if (!name) {
                showNotification('Veuillez entrer un nom pour le template.', 'error');
                return;
            }

            // Show confirmation dialog
            if (confirm(`Êtes-vous sûr de vouloir sauvegarder ce template sous le nom "${name}" ?`)) {
                const template = {
                    name: name,
                    category: templatesModal.templateCategory.value,
                    date: new Date().toISOString(),
                    // Save current layout and styling
                    layoutData: {
                        layout: document.querySelector('.layout-btn.active')?.dataset.layout || 'layout-1-col',
                        columnStyle: document.querySelector('.column-style-btn.active')?.dataset.columnStyle || 'normal',
                        bgStyle: document.querySelector('.bg-style-btn.active')?.dataset.bgStyle || 'normal',
                        separator: document.querySelector('.separator-btn.active')?.dataset.separator || 'line',
                        animation: document.querySelector('.animation-btn.active')?.dataset.animation || 'none'
                    },
                    styleData: {
                        primaryColor: controls.primaryColorPicker.value,
                        secondaryColor: controls.secondaryColorPicker.value,
                        bodyTextColor: controls.bodyTextColorPicker.value,
                        fontFamilyH1: controls.fontFamilyH1Select.value,
                        fontFamilyH2: controls.fontFamilyH2Select.value,
                        fontFamilyBody: controls.fontFamilyBodySelect.value,
                        theme: document.querySelector('.theme-btn.active')?.dataset.theme || 'professional'
                    }
                };

                savedTemplates.push(template);
                saveTemplates();
                updateTemplatesList();
                templatesModal.templateName.value = '';
                showNotification(`Template "${name}" sauvegardé avec succès !`, 'success');
            }
        }

        // Enhanced save CV with confirmation
        function saveCVWithConfirmation() {
            const cvName = `${controls.prenom.value} ${controls.nom.value}`.trim() || 'CV Sans Nom';

            if (confirm(`Êtes-vous sûr de vouloir sauvegarder ce CV sous le nom "${cvName}" ?`)) {
                const cvData = {
                    nom: controls.nom.value,
                    prenom: controls.prenom.value,
                    poste: controls.poste.value,
                    description: controls.description.value,
                    email: controls.email.value,
                    telephone: controls.telephone.value,
                    competences: controls.competences.value,
                    experiences: getDynamicItemsData(controls.experienceList),
                    formations: getDynamicItemsData(controls.formationList),
                    langues: getDynamicItemsData(controls.langueList),
                    projets: getDynamicItemsData(controls.projetList),
                    certifications: getDynamicItemsData(controls.certificationList),
                    references: getDynamicItemsData(controls.referenceList),
                    liensSociaux: getDynamicItemsData(controls.socialList),
                    profilePhoto: localStorage.getItem('profile-photo'),
                    bannerSettings: JSON.parse(localStorage.getItem('cv-banner-settings') || 'null'),
                    layoutSettings: {
                        layout: document.querySelector('.layout-btn.active')?.dataset.layout || 'layout-1-col',
                        columnStyle: document.querySelector('.column-style-btn.active')?.dataset.columnStyle || 'normal',
                        bgStyle: document.querySelector('.bg-style-btn.active')?.dataset.bgStyle || 'normal',
                        separator: document.querySelector('.separator-btn.active')?.dataset.separator || 'line',
                        animation: document.querySelector('.animation-btn.active')?.dataset.animation || 'none'
                    },
                    styleSettings: {
                        primaryColor: controls.primaryColorPicker.value,
                        secondaryColor: controls.secondaryColorPicker.value,
                        bodyTextColor: controls.bodyTextColorPicker.value,
                        fontFamilyH1: controls.fontFamilyH1Select.value,
                        fontFamilyH2: controls.fontFamilyH2Select.value,
                        fontFamilyBody: controls.fontFamilyBodySelect.value,
                        theme: document.querySelector('.theme-btn.active')?.dataset.theme || 'professional'
                    },
                    timestamp: new Date().toISOString()
                };

                const savedCVs = JSON.parse(localStorage.getItem('saved-cvs') || '[]');
                savedCVs.push(cvData);
                localStorage.setItem('saved-cvs', JSON.stringify(savedCVs));

                showNotification(`CV "${cvName}" sauvegardé avec succès !`, 'success');
            }
        }

        // Save all settings (layout, colors, fonts, etc.)
        function saveAllSettings() {
            if (confirm('Êtes-vous sûr de vouloir sauvegarder tous les paramètres actuels (layout, couleurs, polices, etc.) ?')) {
                const settingsData = {
                    layoutSettings: {
                        layout: document.querySelector('.layout-btn.active')?.dataset.layout || 'layout-1-col',
                        columnStyle: document.querySelector('.column-style-btn.active')?.dataset.columnStyle || 'normal',
                        bgStyle: document.querySelector('.bg-style-btn.active')?.dataset.bgStyle || 'normal',
                        separator: document.querySelector('.separator-btn.active')?.dataset.separator || 'line',
                        animation: document.querySelector('.animation-btn.active')?.dataset.animation || 'none'
                    },
                    styleSettings: {
                        primaryColor: controls.primaryColorPicker.value,
                        secondaryColor: controls.secondaryColorPicker.value,
                        bodyTextColor: controls.bodyTextColorPicker.value,
                        fontFamilyH1: controls.fontFamilyH1Select.value,
                        fontFamilyH2: controls.fontFamilyH2Select.value,
                        fontFamilyBody: controls.fontFamilyBodySelect.value,
                        theme: document.querySelector('.theme-btn.active')?.dataset.theme || 'professional'
                    },
                    bannerSettings: JSON.parse(localStorage.getItem('cv-banner-settings') || 'null'),
                    apiSettings: apiSettings,
                    timestamp: new Date().toISOString()
                };

                localStorage.setItem('cv-all-settings', JSON.stringify(settingsData));
                showNotification('Tous les paramètres sauvegardés avec succès !', 'success');
            }
        }

        // Load all settings
        function loadAllSettings() {
            const savedData = localStorage.getItem('cv-all-settings');
            if (!savedData) {
                showNotification('Aucun paramètre sauvegardé trouvé.', 'error');
                return;
            }

            if (confirm('Êtes-vous sûr de vouloir charger les paramètres sauvegardés ? Cela écrasera vos paramètres actuels.')) {
                try {
                    const settingsData = JSON.parse(savedData);

                    // Apply layout settings
                    if (settingsData.layoutSettings) {
                        document.querySelectorAll('.layout-btn').forEach(btn => {
                            btn.classList.toggle('active', btn.dataset.layout === settingsData.layoutSettings.layout);
                        });
                        document.querySelectorAll('.column-style-btn').forEach(btn => {
                            btn.classList.toggle('active', btn.dataset.columnStyle === settingsData.layoutSettings.columnStyle);
                        });
                        document.querySelectorAll('.bg-style-btn').forEach(btn => {
                            btn.classList.toggle('active', btn.dataset.bgStyle === settingsData.layoutSettings.bgStyle);
                        });
                        document.querySelectorAll('.separator-btn').forEach(btn => {
                            btn.classList.toggle('active', btn.dataset.separator === settingsData.layoutSettings.separator);
                        });
                        document.querySelectorAll('.animation-btn').forEach(btn => {
                            btn.classList.toggle('active', btn.dataset.animation === settingsData.layoutSettings.animation);
                        });
                    }

                    // Apply style settings
                    if (settingsData.styleSettings) {
                        controls.primaryColorPicker.value = settingsData.styleSettings.primaryColor || '#3b82f6';
                        controls.secondaryColorPicker.value = settingsData.styleSettings.secondaryColor || '#8b5cf6';
                        controls.bodyTextColorPicker.value = settingsData.styleSettings.bodyTextColor || '#374151';
                        controls.fontFamilyH1Select.value = settingsData.styleSettings.fontFamilyH1 || "'Montserrat', sans-serif";
                        controls.fontFamilyH2Select.value = settingsData.styleSettings.fontFamilyH2 || "'Montserrat', sans-serif";
                        controls.fontFamilyBodySelect.value = settingsData.styleSettings.fontFamilyBody || "'Lato', sans-serif";

                        document.querySelectorAll('.theme-btn').forEach(btn => {
                            btn.classList.toggle('active', btn.dataset.theme === settingsData.styleSettings.theme);
                        });
                    }

                    // Apply banner settings
                    if (settingsData.bannerSettings) {
                        localStorage.setItem('cv-banner-settings', JSON.stringify(settingsData.bannerSettings));
                        loadBannerSettings();
                    }

                    // Apply API settings
                    if (settingsData.apiSettings) {
                        apiSettings = { ...apiSettings, ...settingsData.apiSettings };
                        saveApiSettings();
                    }

                    updatePreview('all');
                    showNotification('Tous les paramètres chargés avec succès !', 'success');
                } catch (error) {
                    showNotification('Erreur lors du chargement des paramètres.', 'error');
                }
            }
        }

        // Update API UI
        function updateApiUI() {
            newToolbarButtons.apiProviderSelect.value = apiSettings.provider;
            apiSettingsModal.providerSelect.value = apiSettings.provider;
            apiSettingsModal.geminiApiKey.value = apiSettings.gemini.apiKey;
            apiSettingsModal.chatgptApiKey.value = apiSettings.chatgpt.apiKey;
            apiSettingsModal.geminiModelSelect.value = apiSettings.gemini.model;
            apiSettingsModal.chatgptModelSelect.value = apiSettings.chatgpt.model;

            // Update status indicator
            const statusIndicator = document.getElementById('api-status-indicator');
            const hasApiKey = (apiSettings.provider === 'gemini' && apiSettings.gemini.apiKey) ||
                             (apiSettings.provider === 'chatgpt' && apiSettings.chatgpt.apiKey);
            statusIndicator.className = `w-2 h-2 rounded-full ${hasApiKey ? 'bg-green-400' : 'bg-gray-400'}`;
            statusIndicator.title = hasApiKey ? 'API configurée' : 'API non configurée';
        }

        // Test API connections
        async function testGeminiConnection() {
            const apiKey = apiSettingsModal.geminiApiKey.value;
            if (!apiKey) {
                showNotification('Veuillez entrer une clé API Gemini.', 'error');
                return;
            }

            showLoader('Test de connexion Gemini...');
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: 'Test' }] }]
                    })
                });

                if (response.ok) {
                    showNotification('Connexion Gemini réussie !', 'success');
                } else {
                    const error = await response.json();
                    showNotification(`Erreur API: ${error.error.message}`, 'error');
                }
            } catch (error) {
                showNotification(`Erreur de connexion: ${error.message}`, 'error');
            } finally {
                hideLoader();
            }
        }

        // Test ChatGPT connection
        async function testChatGPTConnection() {
            const apiKey = apiSettingsModal.chatgptApiKey.value;
            if (!apiKey) {
                showNotification('Veuillez entrer une clé API ChatGPT.', 'error');
                return;
            }

            showLoader('Test de connexion ChatGPT...');
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: apiSettingsModal.chatgptModel.value || 'gpt-3.5-turbo',
                        messages: [{ role: 'user', content: 'Test' }],
                        max_tokens: 10
                    })
                });

                if (response.ok) {
                    showNotification('Connexion ChatGPT réussie !', 'success');
                } else {
                    const error = await response.json();
                    showNotification(`Erreur API: ${error.error?.message || response.statusText}`, 'error');
                }
            } catch (error) {
                showNotification(`Erreur de connexion: ${error.message}`, 'error');
            } finally {
                hideLoader();
            }
        }

        // Fonction pour réduire toutes les sections
        function collapseAllSections() {
            const sections = document.querySelectorAll('.cv-section details');
            sections.forEach(section => {
                section.open = false;
            });
            showNotification('Toutes les sections réduites.', 'success');
        }

        // === FONCTIONS MANQUANTES POUR LES BOUTONS ===

        // Fonction pour analyser le texte et remplir automatiquement
        async function analyzeText() {
            const textToAnalyze = document.getElementById('ai-input').value;
            if (!textToAnalyze.trim()) {
                showNotification('Veuillez saisir un texte à analyser.', 'warning');
                return;
            }

            const apiKey = localStorage.getItem('gemini-api-key') || localStorage.getItem('openai-api-key');
            if (!apiKey) {
                showNotification('Veuillez configurer une clé API dans les paramètres.', 'warning');
                return;
            }

            try {
                showLoader('Analyse du texte...');
                const prompt = `Analyse ce texte et extrais les informations pour remplir un CV. Retourne un objet JSON avec les champs suivants: nom, prenom, poste, description, email, telephone, competences, experiences (tableau d'objets avec title, meta, desc), formations (tableau d'objets avec title, meta). Texte à analyser: "${textToAnalyze}"`;

                const result = await callAIAPI(prompt);
                const cvData = JSON.parse(result);

                // Remplir les champs
                if (cvData.nom) controls.nom.value = cvData.nom;
                if (cvData.prenom) controls.prenom.value = cvData.prenom;
                if (cvData.poste) controls.poste.value = cvData.poste;
                if (cvData.description) controls.description.value = cvData.description;
                if (cvData.email) controls.email.value = cvData.email;
                if (cvData.telephone) controls.telephone.value = cvData.telephone;
                if (cvData.competences) controls.competences.value = cvData.competences;

                // Remplir les expériences
                if (cvData.experiences && Array.isArray(cvData.experiences)) {
                    controls.experienceList.innerHTML = '';
                    cvData.experiences.forEach(exp => {
                        createDynamicItem(controls.experienceList, [
                            { key: 'title', placeholder: 'Titre du poste' },
                            { key: 'meta', placeholder: 'Entreprise & Dates' },
                            { key: 'desc', placeholder: 'Description des missions', type: 'textarea' }
                        ], exp);
                    });
                }

                // Remplir les formations
                if (cvData.formations && Array.isArray(cvData.formations)) {
                    controls.formationList.innerHTML = '';
                    cvData.formations.forEach(form => {
                        createDynamicItem(controls.formationList, [
                            { key: 'title', placeholder: 'Nom du diplôme' },
                            { key: 'meta', placeholder: 'Établissement & Année' }
                        ], form);
                    });
                }

                updatePreview('form');
                hideLoader();
                showNotification('Texte analysé et champs remplis automatiquement.', 'success');

            } catch (error) {
                hideLoader();
                console.error('Erreur lors de l\'analyse:', error);
                showNotification('Erreur lors de l\'analyse du texte.', 'error');
            }
        }

        // Fonction pour générer un mail de présentation
        async function generateMail() {
            const recruiterInfo = {
                nom: controls.bannerNom.value,
                poste: controls.bannerPoste.value,
                email: controls.bannerEmail.value
            };

            const candidateInfo = {
                nom: controls.nom.value,
                prenom: controls.prenom.value,
                poste: controls.poste.value,
                email: controls.email.value
            };

            if (!recruiterInfo.email || !candidateInfo.nom) {
                showNotification('Informations manquantes pour générer le mail.', 'warning');
                return;
            }

            const apiKey = localStorage.getItem('gemini-api-key') || localStorage.getItem('openai-api-key');
            if (!apiKey) {
                showNotification('Veuillez configurer une clé API dans les paramètres.', 'warning');
                return;
            }

            try {
                showLoader('Génération du mail...');
                const prompt = `Génère un mail de présentation professionnel pour postuler au poste de "${candidateInfo.poste}". Le candidat s'appelle ${candidateInfo.prenom} ${candidateInfo.nom}, son email est ${candidateInfo.email}. Le recruteur est ${recruiterInfo.nom}, poste: ${recruiterInfo.poste}, email: ${recruiterInfo.email}. Le mail doit être en français, professionnel, et inclure une présentation brève, les motivations, et une formule de politesse.`;

                const generatedMail = await callAIAPI(prompt);

                // Copier dans le presse-papiers
                navigator.clipboard.writeText(generatedMail)
                    .then(() => {
                        hideLoader();
                        showNotification('Mail généré et copié dans le presse-papiers.', 'success');
                    })
                    .catch(() => {
                        hideLoader();
                        showNotification('Mail généré avec succès.', 'success');
                        console.log('Mail généré:', generatedMail);
                    });

            } catch (error) {
                hideLoader();
                console.error('Erreur lors de la génération du mail:', error);
                showNotification('Erreur lors de la génération du mail.', 'error');
            }
        }

        // Fonction pour ouvrir les paramètres API
        function openAPISettings() {
            controls.apiModal.classList.add('active');
            loadApiSettings();
        }

        // Fonction pour améliorer l'accessibilité
        function improveAccessibility() {
            showLoader('Amélioration de l\'accessibilité...');

            // Ajouter des attributs d'accessibilité
            document.querySelectorAll('[contenteditable="true"]').forEach(el => {
                el.setAttribute('aria-label', 'Zone de texte éditable');
            });

            // Améliorer le contraste des couleurs
            const root = document.documentElement;
            const currentPrimary = getComputedStyle(root).getPropertyValue('--primary-color');
            const currentSecondary = getComputedStyle(root).getPropertyValue('--secondary-color');

            // S'assurer que les couleurs ont un bon contraste
            root.style.setProperty('--primary-color', '#1e40af'); // Bleu plus foncé
            root.style.setProperty('--secondary-color', '#0f172a'); // Gris plus foncé

            // Mettre à jour les pickers de couleur
            controls.primaryColorPicker.value = '#1e40af';
            controls.secondaryColorPicker.value = '#0f172a';

            // Ajouter des labels aux boutons
            document.querySelectorAll('button:not([aria-label])').forEach(btn => {
                const icon = btn.querySelector('i');
                if (icon) {
                    const iconClass = icon.className;
                    let label = '';
                    if (iconClass.includes('magic')) label = 'Utiliser l\'IA';
                    else if (iconClass.includes('save')) label = 'Sauvegarder';
                    else if (iconClass.includes('download')) label = 'Télécharger';
                    else if (iconClass.includes('share')) label = 'Partager';
                    if (label) btn.setAttribute('aria-label', label);
                }
            });

            updatePreview('theme');
            hideLoader();
            showNotification('Accessibilité améliorée.', 'success');
        }

        // Fonction pour ouvrir la modale des templates
        function openTemplates() {
            controls.templatesModal.classList.add('active');
            loadTemplatesList();
        }

        // Fonction pour mettre à jour la couleur primaire
        function updatePrimaryColor() {
            const color = controls.primaryColorPicker.value;
            document.documentElement.style.setProperty('--primary-color', color);
            updatePreview('colors');
        }

        // Fonction pour mettre à jour la couleur secondaire
        function updateSecondaryColor() {
            const color = controls.secondaryColorPicker.value;
            document.documentElement.style.setProperty('--secondary-color', color);
            updatePreview('colors');
        }

        // Fonction pour mettre à jour le style de la bannière
        function updateBannerStyle() {
            const style = controls.bannerStyleSelect.value;
            const banner = document.getElementById('recruiter-banner');
            if (banner) {
                // Supprimer tous les styles de bannière existants
                banner.classList.remove('banner-style-modern', 'banner-style-elegant', 'banner-style-discret', 'banner-style-carte', 'banner-style-degrade', 'banner-style-premium', 'banner-style-minimal', 'banner-style-encadre', 'banner-style-ligne-haute');
                // Ajouter le nouveau style
                banner.classList.add(style);
                updatePreview('banner');
            }
        }

        // Fonction pour charger la liste des templates
        function loadTemplatesList() {
            const templates = JSON.parse(localStorage.getItem('cv-templates') || '[]');
            const templatesList = document.getElementById('templates-list');
            if (!templatesList) return;

            templatesList.innerHTML = '';

            if (templates.length === 0) {
                templatesList.innerHTML = '<p class="text-gray-500 text-center py-4">Aucun modèle sauvegardé</p>';
                return;
            }

            templates.forEach((template, index) => {
                const templateItem = document.createElement('div');
                templateItem.className = 'template-item';
                templateItem.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div>
                            <h4 class="font-medium">${template.name}</h4>
                            <p class="text-sm text-gray-500">${template.data.prenom} ${template.data.nom} - ${template.data.poste || 'Sans poste'}</p>
                            <p class="text-xs text-gray-400">${new Date(template.createdAt || template.timestamp).toLocaleDateString()}</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="load-template-btn bg-blue-500 text-white px-3 py-1 rounded text-sm" data-index="${index}">
                                Charger
                            </button>
                            <button class="delete-template-btn bg-red-500 text-white px-3 py-1 rounded text-sm" data-index="${index}">
                                Suppr
                            </button>
                        </div>
                    </div>
                `;
                templatesList.appendChild(templateItem);
            });

            // Ajouter les event listeners pour les boutons
            document.querySelectorAll('.load-template-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.dataset.index;
                    const templates = JSON.parse(localStorage.getItem('cv-templates') || '[]');
                    const template = templates[index];
                    if (template) {
                        loadTemplate(template.data);
                        controls.templatesModal.classList.remove('active');
                        showNotification(`Modèle "${template.name}" chargé.`, 'success');
                    }
                });
            });

            document.querySelectorAll('.delete-template-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.dataset.index;
                    const templates = JSON.parse(localStorage.getItem('cv-templates') || '[]');
                    const templateName = templates[index].name;
                    templates.splice(index, 1);
                    localStorage.setItem('cv-templates', JSON.stringify(templates));
                    loadTemplatesList();
                    showNotification(`Modèle "${templateName}" supprimé.`, 'success');
                });
            });
        }

        // Fonction pour charger un template
        function loadTemplate(templateData) {
            // Charger les données dans les champs du formulaire
            controls.nom.value = templateData.nom || '';
            controls.prenom.value = templateData.prenom || '';
            controls.poste.value = templateData.poste || '';
            controls.description.value = templateData.description || '';
            controls.email.value = templateData.email || '';
            controls.telephone.value = templateData.telephone || '';
            controls.competences.value = templateData.competences || '';

            // Charger les expériences
            if (templateData.experiences) {
                controls.experienceList.innerHTML = '';
                templateData.experiences.forEach(exp => {
                    createDynamicItem(controls.experienceList, [
                        { key: 'title', placeholder: 'Titre du poste' },
                        { key: 'meta', placeholder: 'Entreprise & Dates' },
                        { key: 'desc', placeholder: 'Description des missions', type: 'textarea' }
                    ], exp);
                });
            }

            // Charger les formations
            if (templateData.formations) {
                controls.formationList.innerHTML = '';
                templateData.formations.forEach(form => {
                    createDynamicItem(controls.formationList, [
                        { key: 'title', placeholder: 'Nom du diplôme' },
                        { key: 'meta', placeholder: 'Établissement & Année' }
                    ], form);
                });
                }

    }

        // Fonction pour sauvegarder un template
        function saveTemplate() {
            const templateName = prompt('Nom du modèle :');
            if (!templateName) return;

            const templateData = {
                name: templateName,
                data: {
                    nom: controls.nom.value,
                    prenom: controls.prenom.value,
                    poste: controls.poste.value,
                    description: controls.description.value,
                    email: controls.email.value,
                    telephone: controls.telephone.value,
                    competences: controls.competences.value,
                    experiences: getDynamicItemsData(controls.experienceList),
                    formations: getDynamicItemsData(controls.formationList),
                    langues: getDynamicItemsData(controls.langueList),
                    projets: getDynamicItemsData(controls.projetList),
                    certifications: getDynamicItemsData(controls.certificationList),
                    references: getDynamicItemsData(controls.referenceList),
                    liensSociaux: getDynamicItemsData(controls.socialList)
                },
                createdAt: new Date().toISOString()
            };

            const templates = JSON.parse(localStorage.getItem('cv-templates') || '[]');
            templates.push(templateData);
            localStorage.setItem('cv-templates', JSON.stringify(templates));

            loadTemplatesList();
            showNotification(`Modèle "${templateName}" sauvegardé.`, 'success');
        }

        // Fonction pour exporter un template
        function exportTemplate() {
            const templateData = {
                nom: controls.nom.value,
                prenom: controls.prenom.value,
                poste: controls.poste.value,
                description: controls.description.value,
                email: controls.email.value,
                telephone: controls.telephone.value,
                competences: controls.competences.value,
                experiences: getDynamicItemsData(controls.experienceList),
                formations: getDynamicItemsData(controls.formationList),
                langues: getDynamicItemsData(controls.langueList),
                projets: getDynamicItemsData(controls.projetList),
                certifications: getDynamicItemsData(controls.certificationList),
                references: getDynamicItemsData(controls.referenceList),
                liensSociaux: getDynamicItemsData(controls.socialList)
            };

            const dataStr = JSON.stringify(templateData, null, 2);
            const dataBlob = new Blob([dataStr], {type:'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'cv-template.json';
            link.click();
            URL.revokeObjectURL(url);
            showNotification('Modèle exporté avec succès.', 'success');
        }

        // Fonction pour importer un template
        function importTemplate() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const templateData = JSON.parse(e.target.result);
                        loadTemplate(templateData);
                        showNotification('Modèle importé avec succès.', 'success');
                    } catch (error) {
                        showNotification('Erreur lors de l\'importation du modèle.', 'error');
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        }

        // Fonction pour obtenir les données des éléments dynamiques
        function getDynamicItemsData(container) {
            const items = [];
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const itemData = {};
                item.querySelectorAll('input, textarea').forEach(input => {
                    itemData[input.dataset.key] = input.value;
                });
                items.push(itemData);
            });
            return items;
        }

        // Fonction pour randomiser le style de la bannière
        function randomizeBannerStyle() {
            const styles = ['banner-style-modern', 'banner-style-elegant', 'banner-style-discret', 'banner-style-carte', 'banner-style-degrade', 'banner-style-premium', 'banner-style-minimal', 'banner-style-encadre', 'banner-style-ligne-haute'];
            const randomStyle = styles[Math.floor(Math.random() * styles.length)];
            controls.bannerStyleSelect.value = randomStyle;
            updateBannerStyle();
            showNotification('Style de bannière randomisé.', 'success');
        }

        // Fonction pour suggérer des couleurs
        function suggestColors() {
            const suggestions = [
                { primary: '#3B82F6', secondary: '#1E40AF' },
                { primary: '#10B981', secondary: '#047857' },
                { primary: '#F59E0B', secondary: '#D97706' },
                { primary: '#EF4444', secondary: '#DC2626' },
                { primary: '#8B5CF6', secondary: '#7C3AED' },
                { primary: '#06B6D4', secondary: '#0891B2' }
            ];

            const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
            controls.primaryColorPicker.value = randomSuggestion.primary;
            controls.secondaryColorPicker.value = randomSuggestion.secondary;
            updatePrimaryColor();
            updateSecondaryColor();
        // === FONCTIONS IA ===

        // Fonction pour réécrire le profil avec l'IA
        async function rewriteProfile() {
            const currentText = controls.description.value;
            if (!currentText.trim()) {
                showNotification('Veuillez saisir une description avant de la réécrire.', 'warning');
                return;
            }

            const apiKey = localStorage.getItem('gemini-api-key') || localStorage.getItem('openai-api-key');
            if (!apiKey) {
                showNotification('Veuillez configurer une clé API dans les paramètres.', 'warning');
                return;
            }

            try {
                showNotification('Réécriture en cours...', 'info');
                const rewrittenText = await callAIAPI('Réécris cette description de profil professionnel de manière plus attrayante et professionnelle : ' + currentText);
                controls.description.value = rewrittenText;
                updatePreview('form');
                showNotification('Profil réécrit avec succès.', 'success');
            } catch (error) {
                console.error('Erreur lors de la réécriture:', error);
                showNotification('Erreur lors de la réécriture du profil.', 'error');
            }
        }

        // Fonction pour optimiser le profil avec l'IA
        async function optimizeProfile() {
            const currentText = controls.description.value;
            if (!currentText.trim()) {
                showNotification('Veuillez saisir une description avant de l\'optimiser.', 'warning');
                return;
            }

            const apiKey = localStorage.getItem('gemini-api-key') || localStorage.getItem('openai-api-key');
            if (!apiKey) {
                showNotification('Veuillez configurer une clé API dans les paramètres.', 'warning');
                return;
            }

            try {
                showNotification('Optimisation en cours...', 'info');
                const optimizedText = await callAIAPI('Optimise cette description de profil pour qu\'elle soit plus impactante pour les recruteurs : ' + currentText);
                controls.description.value = optimizedText;
                updatePreview('form');
                showNotification('Profil optimisé avec succès.', 'success');
            } catch (error) {
                console.error('Erreur lors de l\'optimisation:', error);
                showNotification('Erreur lors de l\'optimisation du profil.', 'error');
            }
        }

        // Fonction pour catégoriser les compétences
        async function categorizeSkills() {
            const skills = controls.competences.value;
            if (!skills.trim()) {
                showNotification('Veuillez saisir des compétences avant de les catégoriser.', 'warning');
                return;
            }

            const apiKey = localStorage.getItem('gemini-api-key') || localStorage.getItem('openai-api-key');
            if (!apiKey) {
                showNotification('Veuillez configurer une clé API dans les paramètres.', 'warning');
                return;
            }

            try {
                showNotification('Catégorisation en cours...', 'info');
                const categorizedSkills = await callAIAPI('Catégorise ces compétences par domaine et présente-les de manière organisée : ' + skills);
                controls.competences.value = categorizedSkills;
                updatePreview('form');
                showNotification('Compétences catégorisées avec succès.', 'success');
            } catch (error) {
                console.error('Erreur lors de la catégorisation:', error);
                showNotification('Erreur lors de la catégorisation des compétences.', 'error');
            }
        }

        // Fonction pour suggérer des compétences
        async function suggestSkills() {
            const profile = controls.description.value;
            const experiences = getDynamicItemsData(controls.experienceList);
            const formations = getDynamicItemsData(controls.formationList);

            if (!profile.trim() && experiences.length === 0 && formations.length === 0) {
                showNotification('Veuillez saisir un profil ou des expériences/formations avant de demander des suggestions.', 'warning');
                return;
            }

            const apiKey = localStorage.getItem('gemini-api-key') || localStorage.getItem('openai-api-key');
            if (!apiKey) {
                showNotification('Veuillez configurer une clé API dans les paramètres.', 'warning');
                return;
            }

            try {
                showNotification('Suggestions en cours...', 'info');
                const context = `Profil: ${profile}\nExpériences: ${experiences.map(e => e.title + ' - ' + e.desc).join(', ')}\nFormations: ${formations.map(f => f.title).join(', ')}`;
                const suggestedSkills = await callAIAPI('Suggère des compétences pertinentes basées sur ce profil professionnel : ' + context);
                controls.competences.value += (controls.competences.value ? '\n\n' : '') + suggestedSkills;
                updatePreview('form');
                showNotification('Compétences suggérées ajoutées.', 'success');
            } catch (error) {
                console.error('Erreur lors des suggestions:', error);
                showNotification('Erreur lors de la génération des suggestions.', 'error');
            }
        }

        // === FONCTIONS PARAMÈTRES ET UTILITAIRES ===

        // Fonction pour sauvegarder les paramètres API
        function saveAPISettings() {
            const geminiKey = document.getElementById('gemini-api-key').value;
            const openaiKey = document.getElementById('openai-api-key').value;

            if (geminiKey) {
                localStorage.setItem('gemini-api-key', geminiKey);
            }
            if (openaiKey) {
                localStorage.setItem('openai-api-key', openaiKey);
            }

            showNotification('Paramètres API sauvegardés.', 'success');
            controls.apiModal.classList.remove('active');
        }

        // Fonction pour gérer la photo de profil
        function handleProfilePhoto() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.getElementById('profile-photo-preview');
                    if (img) {
                        img.src = e.target.result;
                        img.style.display = 'block';
                    }
                    localStorage.setItem('profile-photo', e.target.result);
                    updatePreview('photo');
                    showNotification('Photo de profil mise à jour.', 'success');
                };
                reader.readAsDataURL(file);
            };
            input.click();
        }

        // Fonction pour supprimer la photo de profil
        function removeProfilePhoto() {
            const img = document.getElementById('profile-photo-preview');
            if (img) {
                img.src = '';
                img.style.display = 'none';
            }
            localStorage.removeItem('profile-photo');
            updatePreview('photo');
            showNotification('Photo de profil supprimée.', 'success');
        }

        // Fonction pour charger la photo de profil sauvegardée
        function loadProfilePhoto() {
            const savedPhoto = localStorage.getItem('profile-photo');
            if (savedPhoto) {
                const img = document.getElementById('profile-photo-preview');
                if (img) {
                    img.src = savedPhoto;
                    img.style.display = 'block';
                }
            }
        }

        // Fonction pour basculer le mode sombre
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isDark);
            showNotification(isDark ? 'Mode sombre activé.' : 'Mode sombre désactivé.', 'success');
        }

        // Fonction pour charger le mode sombre
        function loadDarkMode() {
            const isDark = localStorage.getItem('dark-mode') === 'true';
            if (isDark) {
                document.body.classList.add('dark-mode');
            }
        }

        // Fonction pour basculer la visibilité des sections
        function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.toggle('hidden');
                const isHidden = section.classList.contains('hidden');
                localStorage.setItem(`section-${sectionId}-hidden`, isHidden);
            }
        }

        // Fonction pour charger la visibilité des sections
        function loadSectionVisibility() {
            const sections = ['personal-info', 'experience', 'education', 'skills', 'languages', 'projects', 'certifications', 'references', 'social-links'];
            sections.forEach(sectionId => {
                const isHidden = localStorage.getItem(`section-${sectionId}-hidden`) === 'true';
                if (isHidden) {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.classList.add('hidden');
                    }
                }
            });
        }

        // Fonction pour exporter le CV en PDF (simulation)
        function exportToPDF() {
            showNotification('Fonctionnalité d\'export PDF à implémenter.', 'info');
            // Ici vous pourriez intégrer une bibliothèque comme jsPDF ou html2pdf
        }

        // === FONCTIONS ÉLÉMENTS DYNAMIQUES ===

        // Fonction pour créer un élément dynamique
        function createDynamicItem(container, fields, data = {}) {
            const item = document.createElement('div');
            item.className = 'dynamic-item';

            let html = '<div class="dynamic-item-content">';

            fields.forEach(field => {
                const value = data[field.key] || '';
                if (field.type === 'textarea') {
                    html += `<textarea class="dynamic-input" data-key="${field.key}" placeholder="${field.placeholder}" rows="3">${value}</textarea>`;
                } else {
                    html += `<input type="text" class="dynamic-input" data-key="${field.key}" placeholder="${field.placeholder}" value="${value}">`;
                }
            });

            html += '</div>';
            html += '<button class="remove-dynamic-item bg-red-500 text-white px-2 py-1 rounded text-sm">×</button>';

            item.innerHTML = html;
            container.appendChild(item);

            // Event listener pour la suppression
            item.querySelector('.remove-dynamic-item').addEventListener('click', () => {
                container.removeChild(item);
                updatePreview('form');
            });

            // Event listeners pour la mise à jour automatique
            item.querySelectorAll('.dynamic-input').forEach(input => {
                input.addEventListener('input', () => updatePreview('form'));
            });

            return item;
        }

        // Fonction pour ajouter une expérience
        function addExperience() {
            createDynamicItem(controls.experienceList, [
                { key: 'title', placeholder: 'Titre du poste' },
                { key: 'meta', placeholder: 'Entreprise & Dates' },
                { key: 'desc', placeholder: 'Description des missions', type: 'textarea' }
            ]);
        }

        // Fonction pour ajouter une formation
        function addFormation() {
            createDynamicItem(controls.formationList, [
                { key: 'title', placeholder: 'Nom du diplôme' },
                { key: 'meta', placeholder: 'Établissement & Année' }
            ]);
        }

        // Fonction pour ajouter une langue
        function addLanguage() {
            createDynamicItem(controls.langueList, [
                { key: 'title', placeholder: 'Langue' },
                { key: 'meta', placeholder: 'Niveau' }
            ]);
        }

        // Fonction pour ajouter un projet
        function addProject() {
            createDynamicItem(controls.projetList, [
                { key: 'title', placeholder: 'Nom du projet' },
                { key: 'meta', placeholder: 'Technologies utilisées' },
                { key: 'desc', placeholder: 'Description du projet', type: 'textarea' }
            ]);
        }

        // Fonction pour ajouter une certification
        function addCertification() {
            createDynamicItem(controls.certificationList, [
                { key: 'title', placeholder: 'Nom de la certification' },
                { key: 'meta', placeholder: 'Organisme & Date' }
            ]);
        }

        // Fonction pour ajouter une référence
        function addReference() {
            createDynamicItem(controls.referenceList, [
                { key: 'title', placeholder: 'Nom de la personne' },
                { key: 'meta', placeholder: 'Poste & Entreprise' },
                { key: 'desc', placeholder: 'Coordonnées', type: 'textarea' }
            ]);
        }

        // Fonction pour ajouter un lien social
        function addSocialLink() {
            createDynamicItem(controls.socialList, [
                { key: 'title', placeholder: 'Plateforme (LinkedIn, GitHub, etc.)' },
                { key: 'meta', placeholder: 'URL du profil' }
            ]);
        }

        // === INITIALISATION DE L'APPLICATION ===

        // Fonction d'initialisation principale
        function initializeApp() {
            // Charger les paramètres sauvegardés
            loadDarkMode();
            loadSectionVisibility();
            loadProfilePhoto();
            loadAPISettings();
            loadTemplatesList();

            // Initialiser les contrôles
            initializeControls();

            // Ajouter les event listeners
            addEventListeners();

            // Mise à jour initiale de l'aperçu
            updatePreview('all');

            showNotification('Application initialisée avec succès.', 'success');
        }

        // Fonction pour initialiser les contrôles
        function initializeControls() {
            // Initialiser les sélecteurs de couleurs avec les valeurs par défaut
            if (controls.primaryColorPicker) {
                controls.primaryColorPicker.value = '#3B82F6';
            }
            if (controls.secondaryColorPicker) {
                controls.secondaryColorPicker.value = '#1E40AF';
            }
            if (controls.bannerStyleSelect) {
                controls.bannerStyleSelect.value = 'banner-style-modern';
            }
        }

        // Fonction pour ajouter tous les event listeners
        function addEventListeners() {
            // Event listeners pour les champs de formulaire principaux
            const mainFields = ['nom', 'prenom', 'poste', 'description', 'email', 'telephone', 'competences'];
            mainFields.forEach(field => {
                if (controls[field]) {
                    controls[field].addEventListener('input', () => updatePreview('form'));
                }
            });

            // Event listeners pour les boutons d'ajout d'éléments dynamiques
            document.getElementById('add-experience')?.addEventListener('click', addExperience);
            document.getElementById('add-formation')?.addEventListener('click', addFormation);
            document.getElementById('add-language')?.addEventListener('click', addLanguage);
            document.getElementById('add-project')?.addEventListener('click', addProject);
            document.getElementById('add-certification')?.addEventListener('click', addCertification);
            document.getElementById('add-reference')?.addEventListener('click', addReference);
            document.getElementById('add-social-link')?.addEventListener('click', addSocialLink);

            // Event listeners pour les contrôles de couleurs
            if (controls.primaryColorPicker) {
                controls.primaryColorPicker.addEventListener('input', updatePrimaryColor);
            }
            if (controls.secondaryColorPicker) {
                controls.secondaryColorPicker.addEventListener('input', updateSecondaryColor);
            }

            // Event listener pour le sélecteur de style de bannière
            if (controls.bannerStyleSelect) {
                controls.bannerStyleSelect.addEventListener('change', updateBannerStyle);
            }

            // Event listeners pour les boutons IA
            document.getElementById('rewrite-profile')?.addEventListener('click', rewriteProfile);
            document.getElementById('optimize-profile')?.addEventListener('click', optimizeProfile);
            document.getElementById('categorize-skills')?.addEventListener('click', categorizeSkills);
            document.getElementById('suggest-skills')?.addEventListener('click', suggestSkills);

            // Event listeners pour les boutons de couleurs et bannière
            document.getElementById('suggest-colors')?.addEventListener('click', suggestColors);
            document.getElementById('randomize-banner')?.addEventListener('click', randomizeBannerStyle);

            // Event listeners pour les boutons de templates
            document.getElementById('save-template')?.addEventListener('click', saveTemplate);
            document.getElementById('export-template')?.addEventListener('click', exportTemplate);
            document.getElementById('import-template')?.addEventListener('click', importTemplate);

            // Event listeners pour la gestion des photos
            document.getElementById('upload-photo')?.addEventListener('click', handleProfilePhoto);
            document.getElementById('remove-photo')?.addEventListener('click', removeProfilePhoto);

            // Event listeners pour les paramètres API
            document.getElementById('save-api-settings')?.addEventListener('click', saveAPISettings);

            // Event listeners pour les autres contrôles
            document.getElementById('toggle-dark-mode')?.addEventListener('click', toggleDarkMode);
            document.getElementById('export-pdf')?.addEventListener('click', exportToPDF);
            document.getElementById('print-cv')?.addEventListener('click', printCV);

            // Event listeners pour les modales
            document.querySelectorAll('.modal-close').forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.closest('.modal').classList.remove('active');
                });
            });

            // Event listeners pour ouvrir les modales
            document.getElementById('open-templates')?.addEventListener('click', () => {
                controls.templatesModal.classList.add('active');
                loadTemplatesList();
            });

            document.getElementById('open-api-settings')?.addEventListener('click', () => {
                controls.apiModal.classList.add('active');
                loadAPISettings();
            });

            // Event listeners pour les boutons de basculement de sections
            document.querySelectorAll('.toggle-section').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const sectionId = e.target.dataset.section;
                    toggleSection(sectionId);
                });
            });
        }

        // Démarrer l'application quand le DOM est chargé
        initializeApp();

        // Gestion de la sauvegarde du CV
        if (controls.saveCvBtn) {
            controls.saveCvBtn.addEventListener('click', () => {
                const cvData = {
                    nom: controls.nom.value,
                    prenom: controls.prenom.value,
                    poste: controls.poste.value,
                    description: controls.description.value,
                    email: controls.email?.value || '',
                    telephone: controls.telephone?.value || '',
                    competences: controls.competences.value,
                    experiences: getDynamicData(controls.experienceList),
                    formations: getDynamicData(controls.formationList),
                    // Ajouter d'autres données selon les besoins
                    timestamp: Date.now()
                };

                const templateName = prompt('Nom du modèle de CV :');
                if (templateName) {
                    const templates = JSON.parse(localStorage.getItem('cv-templates') || '[]');
                    templates.push({
                        name: templateName,
                        data: cvData,
                        createdAt: new Date().toISOString()
                    });
                    localStorage.setItem('cv-templates', JSON.stringify(templates));
                    showNotification(`CV sauvegardé sous le nom "${templateName}"`, 'success');
                }
            });
        }

        // Gestion du chargement du CV
        if (controls.loadCvBtn) {
            controls.loadCvBtn.addEventListener('click', () => {
                const templates = JSON.parse(localStorage.getItem('cv-templates') || '[]');
                if (templates.length === 0) {
                    showNotification('Aucun modèle de CV sauvegardé.', 'warning');
                    return;
                }

                // Ouvrir la modal des templates
                controls.templatesModal.classList.add('active');
            });
        }

        // Gestion des templates
        if (controls.templatesBtn) {
            controls.templatesBtn.addEventListener('click', () => {
                controls.templatesModal.classList.add('active');
            });
        }

        // Gestion des paramètres API
        if (controls.apiSettingsBtn) {
            controls.apiSettingsBtn.addEventListener('click', () => {
                controls.apiSettingsModal.classList.add('active');
            });
        }

        // Gestion des suggestions de couleurs IA
        if (controls.aiColorBtn) {
            controls.aiColorBtn.addEventListener('click', async () => {
                const prompt = `En tant qu'expert en design graphique, suggère une palette de couleurs cohérente et professionnelle pour un CV. Le poste visé est "${controls.poste.value || 'général'}". Retourne uniquement 2 couleurs principales en hexadécimal (ex: #3b82f6, #1f2937) séparées par une virgule, sans explication.`;

                try {
                    const colorSuggestion = await callAIAPI(prompt);
                    if (colorSuggestion) {
                        const colors = colorSuggestion.split(',').map(c => c.trim());
                        if (colors.length >= 2) {
                            controls.primaryColorPicker.value = colors[0];
                            controls.secondaryColorPicker.value = colors[1];
                            updatePrimaryColor();
                            updateSecondaryColor();
                            showNotification('Palette de couleurs suggérée par IA appliquée.', 'success');
                        }
                    }
                } catch (error) {
                    showNotification('Erreur lors de la génération de couleurs IA.', 'error');
                }
            });
        }

        // Gestion de l'export des templates
        if (controls.exportTemplatesBtn) {
            controls.exportTemplatesBtn.addEventListener('click', () => {
                const templates = JSON.parse(localStorage.getItem('cv-templates') || '[]');
                if (templates.length === 0) {
                    showNotification('Aucun modèle à exporter.', 'warning');
                    return;
                }

                const dataStr = JSON.stringify(templates, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `cv-templates-${new Date().toISOString().split('T')[0]}.json`;
                link.click();
                URL.revokeObjectURL(url);
                showNotification(`${templates.length} modèles exportés.`, 'success');
            });
        }

        // Gestion de l'import des templates
        if (controls.importTemplatesBtn) {
            controls.importTemplatesBtn.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            try {
                                const importedTemplates = JSON.parse(e.target.result);
                                const existingTemplates = JSON.parse(localStorage.getItem('cv-templates') || '[]');

                                // Fusionner les templates
                                const mergedTemplates = [...existingTemplates, ...importedTemplates];
                                localStorage.setItem('cv-templates', JSON.stringify(mergedTemplates));

                                showNotification(`${importedTemplates.length} modèles importés.`, 'success');
                                // Recharger la liste des templates
                                loadTemplatesList();
                            } catch (error) {
                                showNotification('Erreur lors de l\'import des modèles.', 'error');
                            }
                        };
                        reader.readAsText(file);
                    }
                };
                input.click();
            });
        }

        // Gestion de la photo de profil
        const profilePhotoInput = document.getElementById('profile-photo');
        const removeProfilePhotoBtn = document.getElementById('remove-profile-photo');
        const photoCircularCheckbox = document.getElementById('photo-circular');
        const photoBorderCheckbox = document.getElementById('photo-border');

        if (profilePhotoInput) {
            profilePhotoInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        // Ici nous pourrions afficher un aperçu, mais pour l'instant on sauvegarde juste
                        showNotification('Photo de profil sélectionnée.', 'success');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        if (removeProfilePhotoBtn) {
            removeProfilePhotoBtn.addEventListener('click', () => {
                profilePhotoInput.value = '';
                showNotification('Photo de profil supprimée.', 'success');
            });
        }

        // Compteur de caractères pour le profil
        const descriptionTextarea = document.getElementById('description');
        const profileCharCount = document.getElementById('profile-char-count');

        if (descriptionTextarea && profileCharCount) {
            descriptionTextarea.addEventListener('input', () => {
                const count = descriptionTextarea.value.length;
                profileCharCount.textContent = count;
                if (count > 500) {
                    profileCharCount.style.color = '#ef4444';
                } else if (count > 300) {
                    profileCharCount.style.color = '#f59e0b';
                } else {
                    profileCharCount.style.color = '#6b7280';
                }
            });
        }

        // Gestion des langues
        const addLanguageBtn = document.getElementById('add-language');
        const languagesList = document.getElementById('languages-list');

        if (addLanguageBtn && languagesList) {
            addLanguageBtn.addEventListener('click', () => {
                const languageItem = document.createElement('div');
                languageItem.className = 'language-item new-item-animation';
                languageItem.innerHTML = `
                    <div class="flex justify-between items-start mb-3">
                        <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input type="text" placeholder="Langue" class="cv-input w-full p-2 border rounded-md">
                            <select class="cv-input w-full p-2 border rounded-md">
                                <option value="beginner">Débutant</option>
                                <option value="intermediate">Intermédiaire</option>
                                <option value="advanced">Avancé</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>
                        <button class="delete-language-btn ml-3 text-red-500 hover:text-red-700" title="Supprimer">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <label class="flex items-center gap-2 text-sm">
                            <input type="checkbox" class="cv-input"> Certification
                        </label>
                        <label class="flex items-center gap-2 text-sm">
                            <input type="checkbox" class="cv-input"> Drapeau
                        </label>
                    </div>
                `;
                languagesList.appendChild(languageItem);

                // Gestionnaire de suppression
                languageItem.querySelector('.delete-language-btn').addEventListener('click', () => {
                    languageItem.remove();
                    updateLanguagesCount();
                });

                updateLanguagesCount();
            });
        }

        function updateLanguagesCount() {
            const count = document.querySelectorAll('.language-item').length;
            // Ici nous pourrions mettre à jour un compteur si nécessaire
        }

        // Gestion des projets personnels
        const addProjectBtn = document.getElementById('add-project');
        const projectsList = document.getElementById('projects-list');

        if (addProjectBtn && projectsList) {
            addProjectBtn.addEventListener('click', () => {
                const projectItem = document.createElement('div');
                projectItem.className = 'project-item new-item-animation';
                projectItem.innerHTML = `
                    <div class="flex justify-between items-start mb-3">
                        <div class="flex-1 space-y-3">
                            <input type="text" placeholder="Nom du projet" class="cv-input w-full p-2 border rounded-md">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <input type="url" placeholder="Lien GitHub" class="cv-input w-full p-2 border rounded-md">
                                <input type="url" placeholder="Lien démo" class="cv-input w-full p-2 border rounded-md">
                            </div>
                            <textarea placeholder="Description du projet" rows="3" class="cv-input w-full p-2 border rounded-md"></textarea>
                            <input type="text" placeholder="Technologies utilisées (séparées par des virgules)" class="cv-input w-full p-2 border rounded-md">
                        </div>
                        <button class="delete-project-btn ml-3 text-red-500 hover:text-red-700" title="Supprimer">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                projectsList.appendChild(projectItem);

                // Gestionnaire de suppression
                projectItem.querySelector('.delete-project-btn').addEventListener('click', () => {
                    projectItem.remove();
                    updateProjectsCount();
                });

                updateProjectsCount();
            });
        }

        function updateProjectsCount() {
            const count = document.querySelectorAll('.project-item').length;
            // Ici nous pourrions mettre à jour un compteur si nécessaire
        }

        // Gestion des certifications
        const addCertificationBtn = document.getElementById('add-certification');
        const certificationsList = document.getElementById('certifications-list');

        if (addCertificationBtn && certificationsList) {
            addCertificationBtn.addEventListener('click', () => {
                const certificationItem = document.createElement('div');
                certificationItem.className = 'certification-item new-item-animation';
                certificationItem.innerHTML = `
                    <div class="flex justify-between items-start mb-3">
                        <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input type="text" placeholder="Nom de la certification" class="cv-input w-full p-2 border rounded-md">
                            <input type="text" placeholder="Organisme certificateur" class="cv-input w-full p-2 border rounded-md">
                            <input type="date" placeholder="Date d'obtention" class="cv-input w-full p-2 border rounded-md">
                            <input type="text" placeholder="Score obtenu (optionnel)" class="cv-input w-full p-2 border rounded-md">
                        </div>
                        <button class="delete-certification-btn ml-3 text-red-500 hover:text-red-700" title="Supprimer">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <label class="flex items-center gap-2 text-sm">
                            <input type="checkbox" class="cv-input"> Date d'expiration
                        </label>
                        <input type="date" class="cv-input p-1 border rounded text-sm" style="display: none;">
                    </div>
                `;
                certificationsList.appendChild(certificationItem);

                // Gestionnaire de suppression
                certificationItem.querySelector('.delete-certification-btn').addEventListener('click', () => {
                    certificationItem.remove();
                    updateCertificationsCount();
                });

                // Gestion de la date d'expiration
                const expiryCheckbox = certificationItem.querySelector('input[type="checkbox"]');
                const expiryDateInput = certificationItem.querySelector('input[type="date"]:last-child');

                expiryCheckbox.addEventListener('change', () => {
                    expiryDateInput.style.display = expiryCheckbox.checked ? 'block' : 'none';
                });

                updateCertificationsCount();
            });
        }

        function updateCertificationsCount() {
            const count = document.querySelectorAll('.certification-item').length;
            // Ici nous pourrions mettre à jour un compteur si nécessaire
        }

        // Gestion des actions IA pour le profil
        const aiRewriteProfileBtn = document.getElementById('ai-rewrite-profile');
        const aiOptimizeProfileBtn = document.getElementById('ai-optimize-profile');

        if (aiRewriteProfileBtn) {
            aiRewriteProfileBtn.addEventListener('click', async () => {
                const profileText = controls.description.value;
                if (!profileText) {
                    showNotification("Le profil est vide.", "error");
                    return;
                }

                const prompt = `En tant qu'expert en recrutement, réécris ce profil de CV pour qu'il soit plus percutant et professionnel, en utilisant des verbes d'action forts. Garde une longueur similaire et un ton professionnel. Ne retourne que le paragraphe final réécrit, sans aucun commentaire. Le profil actuel est : "${profileText}"`;

                try {
                    const rewrittenProfile = await callAIAPI(prompt);
                    if (rewrittenProfile) {
                        controls.description.value = rewrittenProfile;
                        showNotification("Profil réécrit par l'IA.", "success");
                    }
                } catch (error) {
                    showNotification("Erreur lors de la réécriture IA.", "error");
                }
            });
        }

        if (aiOptimizeProfileBtn) {
            aiOptimizeProfileBtn.addEventListener('click', async () => {
                const profileText = controls.description.value;
                const poste = controls.poste.value;

                if (!profileText) {
                    showNotification("Le profil est vide.", "error");
                    return;
                }

                if (!poste) {
                    showNotification("Veuillez saisir le poste recherché.", "error");
                    return;
                }

                const prompt = `En tant qu'expert en recrutement, optimise ce profil de CV pour le poste de "${poste}". Mets en avant les compétences et expériences les plus pertinentes pour ce poste. Utilise un langage impactant et professionnel. Ne retourne que le paragraphe final optimisé, sans aucun commentaire. Le profil actuel est : "${profileText}"`;

                try {
                    const optimizedProfile = await callAIAPI(prompt);
                    if (optimizedProfile) {
                        controls.description.value = optimizedProfile;
                        showNotification("Profil optimisé pour le poste.", "success");
                    }
                } catch (error) {
                    showNotification("Erreur lors de l'optimisation IA.", "error");
                }
            });
        }

        // Gestion des compteurs d'intérêts
        const interestsTextarea = document.getElementById('interests');
        const interestsCount = document.getElementById('interests-count');

        if (interestsTextarea && interestsCount) {
            interestsTextarea.addEventListener('input', () => {
                const interests = interestsTextarea.value.split(',').filter(i => i.trim());
                interestsCount.textContent = interests.length;
            });
        }

        if (aiSuggestInterestsBtn) {
            aiSuggestInterestsBtn.addEventListener('click', async () => {
                const currentInterests = interestsTextarea.value;
                const prompt = `En tant qu'expert en recrutement, suggère 8 centres d'intérêt pertinents pour un CV dans le domaine professionnel de "${controls.poste.value || 'général'}". Tiens compte des centres d'intérêt existants: "${currentInterests}". Retourne uniquement la liste des suggestions séparées par des virgules, sans introduction ni conclusion.`;

                try {
                    const suggestions = await callAIAPI(prompt);
                    if (suggestions) {
                        if (currentInterests) {
                            interestsTextarea.value = currentInterests + ', ' + suggestions;
                        } else {
                            interestsTextarea.value = suggestions;
                        }
                        // Recalculer le compteur
                        const interests = interestsTextarea.value.split(',').filter(i => i.trim());
                        interestsCount.textContent = interests.length;
                        showNotification('Suggestions IA ajoutées à vos centres d\'intérêt.', 'success');
                    }
                } catch (error) {
                    showNotification('Erreur lors de la génération de suggestions.', 'error');
                }
            });
        }

        // Gestion des références professionnelles
        const addReferenceBtn = document.getElementById('add-reference');
        const referencesList = document.getElementById('references-list');

        if (addReferenceBtn && referencesList) {
            addReferenceBtn.addEventListener('click', () => {
                const referenceItem = document.createElement('div');
                referenceItem.className = 'reference-item new-item-animation';
                referenceItem.innerHTML = `
                    <div class="reference-header">
                        <div class="reference-info">
                            <h4><input type="text" placeholder="Nom du référent" class="cv-input border-none bg-transparent font-medium"></h4>
                            <div class="reference-company">
                                <input type="text" placeholder="Poste occupé" class="cv-input border-none bg-transparent">
                                chez <input type="text" placeholder="Entreprise" class="cv-input border-none bg-transparent">
                            </div>
                        </div>
                        <button class="delete-reference-btn text-red-500 hover:text-red-700" title="Supprimer">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="email" placeholder="Email" class="cv-input w-full p-2 border rounded-md">
                        <input type="tel" placeholder="Téléphone" class="cv-input w-full p-2 border rounded-md">
                    </div>
                    <div class="mt-3">
                        <input type="text" placeholder="Relation professionnelle" class="cv-input w-full p-2 border rounded-md">
                    </div>
                `;
                referencesList.appendChild(referenceItem);

                // Gestionnaire de suppression
                referenceItem.querySelector('.delete-reference-btn').addEventListener('click', () => {
                    referenceItem.remove();
                    updateReferencesCount();
                });

                updateReferencesCount();
            });
        }

        function updateReferencesCount() {
            const count = document.querySelectorAll('.reference-item').length;
            // Ici nous pourrions mettre à jour un compteur si nécessaire
        }

        // Gestion des liens sociaux
        const addSocialLinkBtn = document.getElementById('add-social-link');
        const socialLinksList = document.getElementById('social-links-list');

        if (addSocialLinkBtn && socialLinksList) {
            addSocialLinkBtn.addEventListener('click', () => {
                const socialLinkItem = document.createElement('div');
                socialLinkItem.className = 'social-link-item new-item-animation';
                socialLinkItem.innerHTML = `
                    <div class="platform-icon" style="background: #3b82f6;">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="platform-info">
                        <div class="platform-name">
                            <select class="cv-input border-none bg-transparent font-medium">
                                <option value="linkedin">LinkedIn</option>
                                <option value="twitter">Twitter</option>
                                <option value="github">GitHub</option>
                                <option value="youtube">YouTube</option>
                                <option value="instagram">Instagram</option>
                                <option value="website">Site web</option>
                            </select>
                        </div>
                        <div class="platform-url">
                            <input type="url" placeholder="URL du profil" class="cv-input border-none bg-transparent w-full">
                        </div>
                    </div>
                    <button class="delete-social-btn text-red-500 hover:text-red-700 ml-3" title="Supprimer">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                socialLinksList.appendChild(socialLinkItem);

                // Gestionnaire de suppression
                socialLinkItem.querySelector('.delete-social-btn').addEventListener('click', () => {
                    socialLinkItem.remove();
                });

                // Changer l'icône selon la plateforme
                const platformSelect = socialLinkItem.querySelector('select');
                const platformIcon = socialLinkItem.querySelector('.platform-icon i');

                platformSelect.addEventListener('change', () => {
                    const platform = platformSelect.value;
                    let iconClass = 'fab ';
                    let bgColor = '#3b82f6';

                    switch(platform) {
                        case 'linkedin':
                            iconClass += 'fa-linkedin';
                            bgColor = '#0077b5';
                            break;
                        case 'twitter':
                            iconClass += 'fa-twitter';
                            bgColor = '#1da1f2';
                            break;
                        case 'github':
                            iconClass += 'fa-github';
                            bgColor = '#333';
                            break;
                        case 'youtube':
                            iconClass += 'fa-youtube';
                            bgColor = '#ff0000';
                            break;
                        case 'instagram':
                            iconClass += 'fa-instagram';
                            bgColor = '#e4405f';
                            break;
                        case 'website':
                            iconClass = 'fas fa-globe';
                            bgColor = '#6b7280';
                            break;
                    }

                    platformIcon.className = iconClass;
                    socialLinkItem.querySelector('.platform-icon').style.background = bgColor;
                });
            });
        }

        // Gestion des compétences - extraction depuis les expériences
        const importSkillsFromExpBtn = document.getElementById('import-skills-from-exp');
        const exportSkillsBtn = document.getElementById('export-skills');

        if (importSkillsFromExpBtn) {
            importSkillsFromExpBtn.addEventListener('click', () => {
                // Extraire les technologies des expériences
                const experiences = getDynamicData(controls.experienceList);
                const technologies = new Set();

                experiences.forEach(exp => {
                    if (exp.desc) {
                        // Recherche simple de technologies communes
                        const techKeywords = ['JavaScript', 'Python', 'Java', 'PHP', 'C++', 'C#', 'React', 'Vue', 'Angular', 'Node.js', 'Express', 'Django', 'Laravel', 'Symfony', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'Azure', 'Linux', 'Windows'];
                        techKeywords.forEach(tech => {
                            if (exp.desc.toLowerCase().includes(tech.toLowerCase())) {
                                technologies.add(tech);
                            }
                        });
                    }
                });

                if (technologies.size > 0) {
                    const currentSkills = controls.competences.value;
                    const newSkills = Array.from(technologies).join(', ');
                    if (currentSkills) {
                        controls.competences.value = currentSkills + ', ' + newSkills;
                    } else {
                        controls.competences.value = newSkills;
                    }
                    showNotification(`${technologies.size} compétences extraites des expériences.`, 'success');
                } else {
                    showNotification('Aucune compétence technique trouvée dans les expériences.', 'warning');
                }
            });
        }

        if (exportSkillsBtn) {
            exportSkillsBtn.addEventListener('click', () => {
                const skills = controls.competences.value;
                if (skills) {
                    // Créer un fichier texte avec les compétences
                    const blob = new Blob([skills], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'competences.txt';
                    a.click();
                    URL.revokeObjectURL(url);
                    showNotification('Compétences exportées dans un fichier texte.', 'success');
                } else {
                    showNotification('Aucune compétence à exporter.', 'warning');
                }
            });
        }

        // Gestion des compteurs de compétences
        const competencesTextarea = document.getElementById('competences');
        const skillsCount = document.getElementById('skills-count');

        if (competencesTextarea && skillsCount) {
            competencesTextarea.addEventListener('input', () => {
                const skills = competencesTextarea.value.split(',').filter(s => s.trim());
                skillsCount.textContent = skills.length;
            });
        }

        // Amélioration de la fonction de catégorisation IA des compétences
        const aiCategorizeSkillsBtn = document.getElementById('ai-categorize-skills');

        if (aiCategorizeSkillsBtn) {
            aiCategorizeSkillsBtn.addEventListener('click', async () => {
                const currentSkills = controls.competences.value;
                if (!currentSkills) {
                    showNotification('Veuillez d\'abord saisir vos compétences.', 'warning');
                    return;
                }

                const prompt = `Analyse cette liste de compétences: "${currentSkills}". Regroupe-les par catégories logiques (ex: Langages de programmation, Frameworks, Outils, Technologies, Soft Skills, etc.). Pour chaque catégorie, liste les compétences qui correspondent. Format: "Catégorie 1: compétence1, compétence2\nCatégorie 2: compétence3, compétence4". Ne retourne que les catégories et compétences, sans introduction.`;

                try {
                    const categorizedSkills = await callAIAPI(prompt);
                    if (categorizedSkills) {
                        controls.competences.value = categorizedSkills;
                        showNotification('Compétences organisées par catégories IA.', 'success');
                    }
                } catch (error) {
                    showNotification('Erreur lors de la catégorisation IA.', 'error');
                }
            });
        }

        // Gestion des styles d'intérêts
        const interestsStyleButtons = document.querySelectorAll('[id^="interests-style-"]');

        interestsStyleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons
                interestsStyleButtons.forEach(b => b.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                btn.classList.add('active');

                // Ici nous pourrions changer l'affichage des intérêts selon le style choisi
                showNotification(`Style d'affichage des intérêts changé: ${btn.textContent}`, 'success');
            });
        });

        // Amélioration de la fonction d'ajout de sections personnalisées
        const sectionSuggestionSelect = document.getElementById('section-suggestion-select');

        if (sectionSuggestionSelect) {
            sectionSuggestionSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    controls.newSectionTitleInput.value = e.target.value;
                    // Ici nous pourrions proposer un contenu par défaut selon la section
                    showNotification(`Section "${e.target.value}" sélectionnée.`, 'info');
                }
            });
        }

        // Initialisation des compteurs au chargement
        // Initialiser les compteurs existants
        if (descriptionTextarea && profileCharCount) {
            updateCharCount(descriptionTextarea, profileCharCount, 500);
        }

        if (competencesTextarea && skillsCount) {
            const skills = competencesTextarea.value.split(',').filter(s => s.trim());
            skillsCount.textContent = skills.length;
        }

        if (interestsTextarea && interestsCount) {
            const interests = interestsTextarea.value.split(',').filter(i => i.trim());
            interestsCount.textContent = interests.length;
        }

        // Fonction pour compter les caractères dans les champs de texte
        function updateCharCount(textarea, counterElement, maxLength = null) {
            if (!textarea || !counterElement) return;

            const count = textarea.value.length;
            counterElement.textContent = count;

            if (maxLength) {
                if (count > maxLength) {
                    counterElement.style.color = '#ef4444';
                } else if (count > maxLength * 0.8) {
                    counterElement.style.color = '#f59e0b';
                } else {
                    counterElement.style.color = '#6b7280';
                }
            }
        }
    });

    